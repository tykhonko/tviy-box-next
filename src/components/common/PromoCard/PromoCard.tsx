import React from "react";
import Image from "next/image";
import { Grid, makeStyles, Typography, Button, Theme } from "@material-ui/core";
import LinkComponent from "components/common/LinkComponent";

interface IProps {
  text: string;
  backgroundImage: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "default" | "primary" | "secondary" | undefined;
  buttonText: string;
  route: any;
}

const useStyles = makeStyles<Theme, IProps, string>((theme) => ({
  mainContainer: {
    position: "relative",
    height: 320,
    borderRadius: 10,
    overflow: "hidden",
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    padding: theme.spacing(7, 7, 4),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4, 3),
    },
  },
  text: {
    color: "white",
  },
  buttonContainer: {
    marginTop: "auto",
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%)",
  },
}));

const PromoCard: React.FC<IProps> = ({
  text,
  variant,
  color,
  buttonText,
  route,
  backgroundImage,
}) => {
  const styleProps: any = { backgroundImage };
  const classes = useStyles(styleProps);

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.contentContainer}
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography className={classes.text} variant="h5" align="center">
              {text}
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.buttonContainer}>
            <Button
              fullWidth
              variant={variant}
              color={color}
              // component={LinkComponent}
              {...route}
            >
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.linearGradient} />
      <Grid item>
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="promo"
        />
      </Grid>
    </Grid>
  );
};

export default PromoCard;
