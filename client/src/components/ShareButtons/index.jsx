import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareButtons = (props) => {
  const hashTag = "#BeHonest";
  const iconSize = 32;
  const shareLink = props.shareLink;
  const summary =
    "Want to tell me something secretly? Well, this is your chance. Click the link and write whatever you want to say. It's completely anonymous and I won't know anything about you. | Be Honest";
  return (
    <div className="share-button">
      <WhatsappShareButton title={summary} url={shareLink}>
        <WhatsappIcon size={iconSize} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton title={summary} url={shareLink}>
        <TelegramIcon size={iconSize} round={true} />
      </TelegramShareButton>
      <TwitterShareButton title={summary} url={shareLink} hashTag={hashTag}>
        <TwitterIcon size={iconSize} round={true} />
      </TwitterShareButton>
      <FacebookShareButton quote={summary} hashtag={hashTag} url={shareLink}>
        <FacebookIcon size={iconSize} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton title={summary} summary={summary} url={shareLink}>
        <LinkedinIcon size={iconSize} round={true} />
      </LinkedinShareButton>
      <EmailShareButton
        subject={"Be Honest | Its time to show your opinion"}
        body={summary}
        url={shareLink}
      >
        <EmailIcon size={iconSize} round={true} />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
