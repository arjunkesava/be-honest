import React from 'react';

class PageHead extends React.Component {
  state = {}
  render() {
    const anonymousLink = "https://www.google.com/search?q=explain+anonymous&oq=explain+anonymous";
    return (
      <div className="jumbotron">
        <h1 className="display-5">Welcome to BeHonest!</h1>
        <p className="lead">If you want to say anything to <strong>Arjun</strong>. This is your chance.</p>
        <p className="lead">Its completely <strong><a href={anonymousLink}>Anonymus</a></strong></p>
      </div>
      );
    }
}
 
export default PageHead;