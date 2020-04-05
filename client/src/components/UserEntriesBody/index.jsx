import React from 'react';
import generateRandom from '../../helpers/random';
import validateEmail from '../../helpers/validataEmail';
import Confetti from 'react-confetti';

class UserEntriesBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: 'arpydi@cisco.com',
      generatedUserId: generateRandom(),
      feedbackFormId: generateRandom(),
      viewFormId: generateRandom(15),
      error: false,
      response: {
        status: 404
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generateLinks (values) {
    const generatedUserId = generateRandom();
    const feedbackFormId = generateRandom();
    const viewFormId = generateRandom(15);

    const payload = {
      name: values.name,
      email: values.email,
      generatedUserId,
      feedbackFormId,
      viewFormId 
    }

    this.uploadDataToApi(payload);
  }

  uploadDataToApi (payload) {
    console.log({ payload });

    // const response = await fetch('/api/world', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ post: this.state.post }),
    // });
    // const body = await response.text();
    
    this.setState({ response: {
      status: 200
    }});
  }

  

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // Validate the data and push it
    if (
      this.state.name &&
      this.state.email && 
      validateEmail(this.state.email)
    ) {
      this.generateLinks(this.state);
    } else {
      const error = true;
      this.setState({ error });
    }
  }

  displaySuccessMessage() {
    const shareLink = `${window.location.hostname}/${this.state.generatedUserId}/${this.state.feedbackFormId}`;
    const viewLink = `${window.location.hostname}/v/${this.state.viewFormId}`;
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
            <p>Share the below link with your friends: <strong className="highLightLink">{shareLink}</strong></p>
            <p>If anyone of your friends gives feedback, we will send you an e-mail to <strong className="highLightLink" style={{color: 'orange'}}>{this.state.email}</strong>And you can view all your friends response in the below link. Don't worry we will also send you the below link to your email.</p>
            <p><strong className="highLightLink">{viewLink}</strong></p>
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
    return this.state.response.status !== 200 ? this.displaySuccessMessage() : this.displayCreateForm();
  }
}
 
export default UserEntriesBody;