import React from 'react';

const NoViews = () => {
  return (
    <div className="row justify-content-center">
      <div className="container success-box">
        <h2 style={{color: 'yellow'}}>Oh No!</h2>
        <p>As of now, you don't have any feedback. Comeback later.</p>
        <p>
          If anyone of your friends gives feedback, we will send you an e-mail
          or you can see them here.
        </p>
      </div>
    </div>
  )
};

export default NoViews;