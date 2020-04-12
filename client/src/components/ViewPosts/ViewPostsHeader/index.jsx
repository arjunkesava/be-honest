import React from 'react';

const anonymousLink = "https://www.google.com/search?q=explain+anonymous&oq=explain+anonymous";
const ViewPostsHeader = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">Read about what others think of you!</h1>
      <p className="lead">As you know, this data is collected <a href={anonymousLink} target="_blank" rel="noopener noreferrer">anonymously</a></p>
    </div>
  )
};

export default ViewPostsHeader;