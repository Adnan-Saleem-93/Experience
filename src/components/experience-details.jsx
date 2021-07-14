import React, {useState} from "react";
import {Chip, Icon, Grid, Button} from "@material-ui/core";
import {ChevronRight, ExpandLess, ExpandMore} from "@material-ui/icons";

const ExperienceDetails = ({company, dates, duties, title}) => {
  const [detailsHidden, setDetailsHidden] = useState(true);
  const handleButtonClick = () => {
    setDetailsHidden(!detailsHidden);
  };

  return (
    <>
      {title}
      <Chip label={company} />
      <p className="dates">{dates}</p>
      <Grid container spacing={3}>
        {duties.map((duty, index) => {
          return (
            <React.Fragment key={index}>
              <Grid
                item
                xs={1}
                className="duty-icon"
                hidden={index >= 2 && detailsHidden ? true : false}
              >
                <Icon>
                  <ChevronRight className="icon" />
                </Icon>
              </Grid>
              <Grid
                item
                xs={11}
                className="duty-text"
                hidden={index >= 2 && detailsHidden ? true : false}
              >
                <span className="duty">{duty}</span>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        className="btn-expandMoreLess"
        endIcon={detailsHidden ? <ExpandMore /> : <ExpandLess />}
        onClick={handleButtonClick}
      >
        {detailsHidden ? "Show More" : "Show Less"}
      </Button>
    </>
  );
};

export default ExperienceDetails;
