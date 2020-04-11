import React from 'react';
import ViewPost from '../ViewPost';
import WantToKnow from '../WantToKnow';
import ThankYouHeader from './ThankYouHeader';

class ThankYou extends React.Component {
  state = {}

  getPostContentFromWebStorage () {
    var storage = localStorage.getItem('be-honest-form');
    if (!!storage) {
      return JSON.parse(storage);
    }
    return false;
  }

  displayUserPost() {
    const post = this.getPostContentFromWebStorage();
    return (
      <div className="container">
        <p className="lead">This is how your comment looks like:</p>
        <ViewPost post={post.content} name={post.name} />
      </div>
    )
  }

  render() {
    return (
      <>
        <ThankYouHeader/>
        { this.getPostContentFromWebStorage() ? this.displayUserPost() : <React.Fragment /> }
        <WantToKnow />
      </>
    );
  }
}
 
export default ThankYou;