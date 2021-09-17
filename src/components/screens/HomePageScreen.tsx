import React from "react";
import { Container, Grid } from "@material-ui/core";
import HomePageBanner from "components/homepage/HomePageBanner";
import BoxesExample from "./BoxesExample";

const HomePageScreen = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <HomePageBanner />
      </Grid>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          Carousel here
        </Grid>
        <Grid item xs={12}>
          <BoxesExample />
        </Grid>
      </Container>
    </Grid>
  );
};

export default HomePageScreen;
