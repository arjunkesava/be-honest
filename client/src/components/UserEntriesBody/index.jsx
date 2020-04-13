import React from 'react';
import validateEmail from '../../helpers/validataEmail';
import ServerError from '../ServerError';
import Spinner from '../Spinner';
import Success from '../Success';

class UserEntriesBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kesava',
      email: 'share@gm.com',
      generatedUserId: '',
      feedbackFormId: '',
      viewFormId: '',
      error: false,
      status: 200,
      success: false,
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async uploadDataToApi(payload) {
    var response = await fetch('/insert/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payload }),
    });
    var body = await response.text();
    this.setState({
      isLoading: false,
      status: response.status,
    });

    //eslint-disable-next-line
    if (body && response.status == 200) {
      var jsonBody = JSON.parse(body);
      this.setState({
        success: true,
        generatedUserId: jsonBody[`user-id`],
        feedbackFormId: jsonBody[`form-id`],
        viewFormId: jsonBody[`view-id`],
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // Validate the data and push it
    if (
      this.state.name &&
      this.state.email &&
      validateEmail(this.state.email)
    ) {
      this.setState({ isLoading: true });
      this.uploadDataToApi({
        name: this.state.name,
        email: this.state.email,
      });
    } else {
      var error = true;
      this.setState({ error });
    }
  }

  displaySuccessMessage() {
    return (
      <Success
        generatedUserId={this.state.generatedUserId}
        feedbackFormId={this.state.feedbackFormId}
        email={this.state.email}
        viewFormId={this.state.viewFormId}
        shareLink={`https://${window.location.hostname}/${this.state.generatedUserId}/${this.state.feedbackFormId}`}
        viewLink={`https://${window.location.hostname}/v/${this.state.viewFormId}`}
      />
    );
  }

  displayValidationAlert() {
    return (
      <div className="row justify-content-center">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Something went wrong. Please fill the valid details
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={() => this.setState({ error: false })}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }

  displayCreateForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          {this.state.error ? (
            this.displayValidationAlert()
          ) : (
            <React.Fragment />
          )}
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="form-group">
                <label
                  htmlFor="userName"
                  className={this.state.error ? "required" : ""}
                >
                  Enter your Name:
                </label>
                <input
                  className="form-control"
                  id="userName"
                  name="userName"
                  required={true}
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder="Enter your beautiful name here"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="form-group">
                <label
                  htmlFor="userEmail"
                  className={this.state.error ? "required" : ""}
                >
                  Enter your Email-Id:
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="userEmail"
                  required={true}
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="Recomended"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We need your email to send the generated links.
                </small>
              </div>
            </div>
            <div className="col-md-5 submit-div">
              <button type="submit" className="btn btn-primary submit">
                Generate Link
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    if (this.state.success) {
      return this.displaySuccessMessage();
    }
    if (this.state.status !== 200) {
      return <ServerError />;
    }
    return this.displayCreateForm();
  }
}
 
export default UserEntriesBody;