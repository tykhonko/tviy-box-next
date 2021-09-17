import React from "react";
import Image from "next/image";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "components/common/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 7, 4),
    backgroundImage: "url(/static/homepage-back.png)",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    overflowX: "hidden",
  },
  extraMargin: {
    marginTop: theme.spacing(9),
  },
}));

const HomePageBanner = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container alignItems="center">
      <Container maxWidth="lg">
        <Grid item xs={7}>
          <Grid container justifyContent="flex-start" spacing={4}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h1">
                    Сервіс подарунків, який економить час
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Створюй свій індивідуалізований подарунковий бокс на
                    конструкторі або обирай серед готових у каталозі
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button color="primary" variant="contained">
                Створити свій подарунковий бокс
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.extraMargin}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">серед наших клієнтів</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item>
                      <Image
                        src="/static/clients/client-bolt.svg"
                        width={48}
                        height={28}
                        alt="Bolt"
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src="/static/clients/client-bi.svg"
                        width={86}
                        height={34}
                        alt="Будинок іграшок"
                      />
                    </Grid>
                    <Grid item>
                      <Image
                        src="/static/clients/client-zakaz.svg"
                        width={100}
                        height={28}
                        alt="Будинок іграшок"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">відправили боксів</Typography>
                  <Typography variant="h3">10 000+</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Link href="9gag.com">Детальніше про Твій Бокс &#8594;</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default HomePageBanner;
