import React from "react";
import HowItWorks from "../HowItWorks";
import PageHead from "../PageHead";
import UserEntriesBody from "../UserEntriesBody";

const CreateForm = () => {
  const subHeading = "If you want to recieve any honest opinions about you.";
  return (
    <>
      <PageHead subSectionParagraph={subHeading}></PageHead>
      <UserEntriesBody />
      <HowItWorks />
    </>
  );
};

export default CreateForm;
