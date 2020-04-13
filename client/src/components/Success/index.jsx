import React from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from "react-share";

const Success = (props) => {
  return (
    <React.Fragment>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={600}
        />
        <div className="row justify-content-center">
          <div className="container success-box">
            <h2 style={{ color: "orange" }}>Well done! What's next!</h2>
            <p>Aww yeah, you had successfully created this form.</p>
            <p>
              Share the below link with your friends:{" "}
              <div className="bd-callout bd-callout-warning">
                <strong className="highLightLink">
                  <Link
                    to={`/${props.generatedUserId}/${props.feedbackFormId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.shareLink}
                  </Link>
                </strong>
              </div>
              <div style={{ display: 'flex' }}>
                <EmailShareButton
                  subject = {'Be Honest | Its time to know'}
                  body = {'This is the test body'}
                  url = {'http://google.com'}
                >
                  <EmailIcon size={30} round={true} />
                </EmailShareButton>
                <FacebookShareButton
                  quote = {'Be Honest | Its time to know'}
                  hashtag = {'#BeHonest'}
                  url = {'http://google.com'}
                >
                  <FacebookIcon size={30} />
                </FacebookShareButton>
                <LinkedinShareButton
                  title = {'Be Honest | Its time to know'}
                  summary = {'This is the test body'}
                  url = {'http://google.com'}
                >
                  <LinkedinIcon size={30} />
                </LinkedinShareButton>
              </div>
            </p>
            <p>
              If anyone of your friends gives feedback, we will send you an
              e-mail to{" "}
              <div className="bd-callout bd-callout-warning">
                <strong className="highLightLink" style={{ color: "orange" }}>
                  {props.email}
                </strong>
              </div>
              And you can view all your friends response in the below link.
              Don't worry we will also send you the below link to your email.
            </p>
            <p>
              <div className="bd-callout bd-callout-warning">
                <strong className="highLightLink">
                  <Link
                    to={`/v/${props.viewFormId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.viewLink}
                  </Link>
                </strong>
              </div>
            </p>
            <p>
              <strong>Note:</strong> Please don't share the above link (it's
              secret)
            </p>
          </div>
        </div>
      </React.Fragment>
  )
};

export default Success;

/**
 * 
                
 */