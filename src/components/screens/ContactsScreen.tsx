import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ContactsGoogleMap from "../contacts/ContactsGoogleMap";

const ContactsScreen = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h2">Контакти</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <ContactsGoogleMap />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactsScreen;
