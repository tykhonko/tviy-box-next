import React, { memo, ReactNode } from "react";
import PropTypes from "prop-types";
import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface IProps {
  top?: ReactNode;
  children: ReactNode;
  bottom?: ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: "sticky",
    top: 0,
    padding: theme.spacing(3),
    backgroundColor: "white",
    borderRight: "1px solid #EFEFEF",
    height: "100%",
    width: 221,
    [theme.breakpoints.down("sm")]: {
      width: "unset",
      padding: theme.spacing(1),
      overflow: "scroll",
      ...theme.mixins.disableScrollBar,
    },
  },
  menuList: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexWrap: "nowrap",
    },
  },
}));

const Sidebar: React.FC<IProps> = ({ top, bottom, children, className }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <div className={clsx(classes.root, className)}>
      <Grid container spacing={3}>
        {isMobile && top && (
          <Grid item xs={12}>
            {top}
          </Grid>
        )}

        <Grid item xs={12} className={classes.menuList}>
          {children}
        </Grid>

        {bottom && (
          <Grid item xs={12}>
            {bottom}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Sidebar;
