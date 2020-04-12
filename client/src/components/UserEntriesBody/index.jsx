import React from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import validateEmail from '../../helpers/validataEmail';
import ServerError from '../ServerError';
import Spinner from '../Spinner';

class UserEntriesBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      generatedUserId: '',
      feedbackFormId: '',
      viewFormId: '',
      error: false,
      status: 200,
      success: false,
      isLoading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async uploadDataToApi (payload) {
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
      status: response.status 
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
        email: this.state.email
      });
    } else {
      var error = true;
      this.setState({ error });
    }
  }

  displaySuccessMessage() {
    var shareLink = `https://${window.location.hostname}/${this.state.generatedUserId}/${this.state.feedbackFormId}`;
    var viewLink = `https://${window.location.hostname}/v/${this.state.viewFormId}`;
    return (
      <React.Fragment>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={600}
        />
        <div className="row justify-content-center">
          <div className="container success-box">
            <h2 style={{color: 'orange'}}>Well done! What's next!</h2>
            <p>Aww yeah, you had successfully created this form.</p>
            <p>Share the below link with your friends: <strong className="highLightLink"><Link to={`/${this.state.generatedUserId}/${this.state.feedbackFormId}`} target="_blank" rel="noopener noreferrer">{shareLink}</Link></strong></p>
            <p>If anyone of your friends gives feedback, we will send you an e-mail to <strong className="highLightLink" style={{color: 'orange'}}>{this.state.email}</strong>And you can view all your friends response in the below link. Don't worry we will also send you the below link to your email.</p>
            <p><strong className="highLightLink"><Link to={`/v/${this.state.viewFormId}`} target="_blank" rel="noopener noreferrer">{viewLink}</Link></strong></p>
            <p><strong>Note:</strong> Please don't share the above link (it's secret)</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  displayValidationAlert () {
    return (
      <div className="row justify-content-center">
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          Something went wrong. Please fill the valid details
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={() => this.setState({error: false})}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    )
  }

  displayCreateForm () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
        {
          this.state.error ?
          this.displayValidationAlert() :
          <React.Fragment/>
        }
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="form-group">
                <label
                  htmlFor="userName"
                  className={this.state.error ? 'required' : ''}
                >Enter your Name:</label>
                <input
                  className="form-control"
                  id="userName"
                  name="userName"
                  required={true}
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                  placeholder="Enter your beautiful name here"/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="form-group">
                <label
                  htmlFor="userEmail"
                  className={this.state.error ? 'required' : ''}
                >Enter your Email-Id:</label>
                <input
                  className="form-control"
                  type="email"
                  name="userEmail"
                  required={true}
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="Recomended"
                />
                <small id="emailHelp" className="form-text text-muted">We need your email to send the generated links.</small>
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
    if(this.state.isLoading) {
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