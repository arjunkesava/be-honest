import React from 'react';

class HowItWorks extends React.Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="alert alert-info" role="alert">
          <h1 className="display-6">How this App Works...</h1>
            <p>1) Enter your name, email id and generate a link.</p>
            <p>2) Share that link in all the social media platforms and ask your friends to open it.</p>
            <p>3) When any of your friends posts the review, we will mail you.</p>
            <hr/>
            <p className="mb-0">
              <strong>Note</strong>: Your email is safe and secure with us. We don't share it with anyone.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default HowItWorks;