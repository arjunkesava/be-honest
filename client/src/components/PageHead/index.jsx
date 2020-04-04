import React from 'react';

class PageHead extends React.Component {
  state = {}
  render() {
    const anonymousLink = "https://www.google.com/search?q=explain+anonymous&oq=explain+anonymous";
    const subSection = this.props.subSectionParagraph + ' This is you chance';
    return (
      <div className="jumbotron">
        <h1 className="display-5">Welcome to BeHonest!</h1>
        <p className="lead" dangerouslySetInnerHTML={{ __html: subSection}}></p>
        <p className="lead">Its completely <strong><a href={anonymousLink} target="_blank" rel="noopener noreferrer">Anonymus</a></strong></p>
      </div>
      );
    }
}
 
export default PageHead;