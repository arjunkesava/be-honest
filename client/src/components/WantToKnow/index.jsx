import React from 'react';
import { Link } from 'react-router-dom';

const WantToKnow = () => {
  return (
    <div className="container">
      <div className="want-to-know">
        <h3 className="stripe">Want to know about what your friends think about you?</h3>
        <p>Click <Link to='/'>here</Link> and generate a form. Share it with your friends and get their feedback.</p>
      </div>
    </div>
  );
}

export default WantToKnow;