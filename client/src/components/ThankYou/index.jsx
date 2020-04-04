import React from 'react';
import ThankYouHeader from './ThankYouHeader';
import ViewPost from '../ViewPost';

class ThankYou extends React.Component {
  state = {}
  render() {
    return (
      <>
        <ThankYouHeader/>
        <ViewPost></ViewPost>
        <div className="container">
          <div className="want-to-know">
            <h3 className="stripe">Want to know about what your friends think about you?</h3>
            <p>Click on this <a href='/create'>link</a> and generate a form. Share it with your friends and get their feedback.</p>
          </div>
        </div>
      </>
    );
  }
}
 
export default ThankYou;