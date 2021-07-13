import React from "react";
import {Chip, Icon, Grid} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";

const ExperienceDetails = ({company, dates, duties, title}) => {
  return (
    <>
      {title}
      <Chip label={company} />
      <p className="dates">{dates}</p>
      <Grid container spacing={3}>
        {duties.map((duty, index) => {
          return (
            <>
              <Grid item xs={1}>
                <Icon>
                  <ChevronRight className="icon" />
                </Icon>
              </Grid>
              <Grid item xs={11} className="duty-section">
                <span className="duty">{duty}</span>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default ExperienceDetails;
