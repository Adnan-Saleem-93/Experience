import React from "react";
import {Chip} from "@material-ui/core";

const ExperienceDetails = ({company, dates, duties, title}) => {
  return (
    <>
      {title}
      <Chip label={company} />
    </>
  );
};

export default ExperienceDetails;
