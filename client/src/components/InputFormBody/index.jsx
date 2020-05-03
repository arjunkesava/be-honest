import React from 'react';
import ServerError from '../ServerError';
import Spinner from '../Spinner';

class InputFormBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      honestyTextArea: '',
      isLoading: false,
      name: '',
      status: 200
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  async uploadDataToApi (payload) {
    var response = await fetch('/api/insert/honests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payload }),
    });

    var body = await response.text();

    // Stop the spinner
    this.setState({
      isLoading: false,
      status: response.status
    });

    //eslint-disable-next-line
    if (body && response.status == 200) {
      // Save the date to localStorage for thank you page
      window.localStorage.setItem(`be-honest-form`, body) 

      // Rediect to thank you page.
      window.location.replace("/thankyou");    
    }
  }

  displayInputForm () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="form-group">
              <label
                htmlFor="honestyTextArea"
                className={this.state.error ? "required" : ""}
              >
                {`Enter what ever you want to tell to ${this.props.userName}.`}
              </label>
              <textarea
                className="form-control"
                id="honestyTextArea"
                name="honestyTextArea"
                rows="5"
                value={this.state.honestyTextArea}
                onChange={e => this.setState({ honestyTextArea: e.target.value })}
                placeholder="Start typing here..."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">
                {`If you want to tell your name to ${this.props.userName}:`}
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder="Optional"
              />
            </div>
          </div>
          <div className="col-md-3 submit-div">
            <button
              type="submit"
              className="btn btn-primary submit"
            >
              Done.
            </button>
          </div>
        </div>
      </div>
      </form>
    );
  }

  handleSubmit (event) {
    event.preventDefault();
    // If the error is already true,
    // then we will mark it false
    // to validate for every submit
    if (this.state.error) {
      this.setState({ error: false });
    }
    // Validate and push
    if (
      this.state.honestyTextArea &&
      this.state.honestyTextArea.length > 0
    ) {
      this.setState({ isLoading: true });
      this.uploadDataToApi({
        name: this.state.name,
        content: this.state.honestyTextArea,
        userId: this.props.userId,
      });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    if (this.state.status !== 200) {
      return <ServerError />;
    }
    return this.displayInputForm();
  }
}

export default InputFormBody;
