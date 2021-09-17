import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Grid, Button, Link } from "@material-ui/core";
import LinkComponent from "components/common/LinkComponent";
import { routes } from "utils/routing";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    boxShadow: "unset",
  },
  toolbar: {
    padding: theme.spacing(2, 3),
    backgroundColor: "#F7F7F8",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1);",
  },
}));

const links = [
  {
    id: 1,
    title: "Каталог боксів",
    route: routes.catalogue(),
  },
  {
    id: 2,
    title: "Конструктор",
    route: routes.constructor(),
  },
  {
    id: 3,
    title: "Доставка і оплата",
    route: routes.deliveryAndPayments(),
  },
  {
    id: 4,
    title: "Контакти",
    route: routes.contacts(),
  },
  {
    id: 5,
    title: "FAQ",
    route: routes.faq(),
  },
  {
    id: 6,
    title: "Корпоративним клієнтам",
    route: routes.corporateClients(),
  },
];

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container spacing={4} alignItems="center">
                <Grid item>
                  <LinkComponent {...routes.home()}>
                    <Image
                      src="/tviy-box.svg"
                      alt="Tviy Box main logo"
                      width={62}
                      height={32}
                    />
                  </LinkComponent>
                </Grid>
                <Grid item>
                  <Grid container spacing={3}>
                    {links.map((link) => {
                      return (
                        <Grid item key={link.id}>
                          <Link
                            component={LinkComponent}
                            variant="body2"
                            color="inherit"
                            underline="none"
                            {...link.route}
                          >
                            {link.title}
                          </Link>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={3} alignItems="center">
                <Grid item>Кошик</Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Створити свій бокс
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
