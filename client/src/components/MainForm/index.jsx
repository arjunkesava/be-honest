import React from 'react';
import InputFormBody from '../InputFormBody';
import NotFound from '../NotFound';
import PageHead from '../PageHead';
import Spinner from '../Spinner';
import WantToKnow from '../WantToKnow';

class MainForm extends React.Component {
  state = {
    userName: '',
    isUrlValid: true,
    isLoading: true
  };

  validateUrlParams(userId, formId) {
    if(
      userId &&
      userId.length === 9 &&
      formId &&
      formId.length === 9
    ) {
      return true;
    }
    return false;
  }

  async componentDidMount() {
    var {
      match: {
        params: {
          userId,
          formId
        }
      }
    } = this.props;
    var isUrlValid = false;
    var userName = '';

    if(this.validateUrlParams(userId, formId)) {
      var payload = {
        userId,
        formId,
      };
      var response = await fetch('/check/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payload }),
      });
      var body = await response.text();
      var jsonBody = JSON.parse(body);
      // if the name is present then we assume its valid
      if(jsonBody && jsonBody[0] && jsonBody[0].name && jsonBody[0].email) {
        isUrlValid = true;
        userName = jsonBody[0].name;
      }
      this.setState({ isUrlValid, userName, isLoading: false });
    }
  }

  displayMainFormComponent () {
    if(this.state.isLoading) {
      return <Spinner />;
    } else if(!this.state.isUrlValid) {
      return <NotFound />;
    } else {
      return <InputFormBody userName={this.state.userName} />;
    }
  }

  render() {
    const subHeading = `If you want to say anything to <strong>${this.state.userName}</strong>`;
    return (
      <>
        <PageHead
          subSectionParagraph={subHeading}
        />
        {this.displayMainFormComponent()}
        <WantToKnow />
      </>
    );
  }
}

export default MainForm;
