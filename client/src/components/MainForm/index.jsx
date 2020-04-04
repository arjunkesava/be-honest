import React from 'react';
import PageHead from '../PageHead';
import InputFormBody from '../InputFormBody';

class MainForm extends React.Component {
  render() {
    const userName = 'Arjun';
    const subHeading = `If you want to say anything to <strong>${userName}</strong>.`;
    return (
      <>
        <PageHead
          subSectionParagraph={subHeading}
        />
        <InputFormBody
          userName={userName}
        />
      </>
    );
  }
}

export default MainForm;
