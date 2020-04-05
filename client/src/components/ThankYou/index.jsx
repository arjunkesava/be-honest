import React from 'react';
import ThankYouHeader from './ThankYouHeader';
import ViewPost from '../ViewPost';
import WantToKnow from '../WantToKnow';

class ThankYou extends React.Component {
  state = {}
  render() {
    return (
      <>
        <ThankYouHeader/>
        <ViewPost />
        <WantToKnow />
      </>
    );
  }
}
 
export default ThankYou;