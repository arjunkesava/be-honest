import React from 'react';
import ThankYouHeader from './ThankYouHeader';
import ViewPost from '../ViewPost';
import WantToKnow from '../WantToKnow';

class ThankYou extends React.Component {
  state = {}

  displayUserPost() {
    const post = 'Hello Doctoer, Heart miss ayya';
    return (
      <div className="container">
        <p className="lead">This is how your comment looks like:</p>
        <ViewPost post={post} />
      </div>
    )
  }

  render() {
    return (
      <>
        <ThankYouHeader/>
        { this.displayUserPost() }
        <WantToKnow />
      </>
    );
  }
}
 
export default ThankYou;