import React from 'react';
import { Link } from 'react-router-dom';

const NoViews = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="container success-box">
        <h2 style={{ color: "yellow" }}>Oh No!</h2>
        <p>As of now, you don't have any feedback. Comeback later.</p>
        <p>
          In the meanwhile, share the below link with your friends:
          <div className="bd-callout bd-callout-warning">
            <strong className="highLightLink">
              <Link
                to={props.shareLink}
                target="_blank"
                rel="noopener noreferrer"
              >{props.shareLink}</Link>
            </strong>
          </div>
        </p>
        <p>
          If anyone of your friends gives feedback, we will send you an e-mail
          to
          <div className="bd-callout bd-callout-warning">
            <strong className="highLightLink" style={{ color: "orange" }}>
              {props.email}
            </strong>
          </div>
          And you can see those here.
        </p>
      </div>
    </div>
  );
};

export default NoViews;
