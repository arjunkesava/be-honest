import React from 'react';

const NoViews = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="container success-box">
        <h2 style={{color: 'yellow'}}>Oh No!</h2>
        <p>As of now, you don't have any feedback. Comeback later.</p>
        <p>In the meanwhile, share the below link with your friends:
          <strong className="highLightLink">{props.shareLink}</strong>
        </p>
        <p>
          If anyone of your friends gives feedback,
          we will send you an e-mail to
          <strong className="highLightLink" style={{color: 'orange'}}>{props.email}</strong>
          And you can see those here.
        </p>
      </div>
    </div>
  )
};

export default NoViews;