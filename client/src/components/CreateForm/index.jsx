import React from 'react';
import PageHead from '../PageHead';
import UserEntriesBody from '../UserEntriesBody';
import HowItWorks from '../HowItWorks';

class CreateForm extends React.Component {
  state = {  }
  render() { 
    const subHeading = 'If you want to recieve any honest opinions about you.';
    console.log(this.props);
    return (
      <>
        <PageHead
          subSectionParagraph={subHeading}
        ></PageHead>
        <UserEntriesBody />
        <HowItWorks />
      </>
    );
  }
}
 
export default CreateForm;