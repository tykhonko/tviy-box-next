import React, { ReactNode } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

interface IProps {
  sidebar: ReactNode;
  top?: ReactNode;
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    overflow: "hidden",
    backgroundColor: "white",
    padding: theme.spacing(6, 14),
    minHeight: "calc(100vh - 83px)",
    flexBasis: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(5, 2),
      minHeight: "calc(100vh - 64px - 51px)",
    },
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Frame: React.FC<IProps> = ({ sidebar, top, children }) => {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap" className={classes.wrapper}>
      <Grid item>{sidebar}</Grid>
      <Grid item xs className={classes.contentContainer}>
        <Grid container spacing={3}>
          {top && (
            <Grid item xs={12}>
              {top}
            </Grid>
          )}
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Frame;
