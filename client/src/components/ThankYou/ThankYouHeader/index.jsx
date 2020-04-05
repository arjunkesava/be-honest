import React from 'react';

const ThankYouHeader = () => {
  const anonymousLink = "https://www.google.com/search?q=explain+anonymous&oq=explain+anonymous";
  return (
    <div className="jumbotron">
      <h1 className="display-5">Thank You!</h1>
      <p className="lead">We will send this feedback as <a href={anonymousLink} target="_blank" rel="noopener noreferrer">Anonymus</a>.</p>
    </div>
  );
}
 
export default ThankYouHeader;