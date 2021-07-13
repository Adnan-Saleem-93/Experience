import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Tabs, Tab, Typography, Box, Grid} from "@material-ui/core";
import ExperienceDetails from "./experience-details";

const SideNavbar = ({data}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderSideNavbarItems = () => {
    return data.map((item, index) => {
      return <Tab label={item.company} {...a11yProps(index)} key={index} />;
    });
  };
  const renderTabItems = () => {
    return data.map((item, index) => {
      return (
        <TabPanel value={value} index={index} key={item.id}>
          <ExperienceDetails {...item} />
        </TabPanel>
      );
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {renderSideNavbarItems()}
        </Tabs>
      </Grid>
      <Grid item xs={9}>
        {renderTabItems()}
      </Grid>
    </Grid>
  );
};

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default SideNavbar;
