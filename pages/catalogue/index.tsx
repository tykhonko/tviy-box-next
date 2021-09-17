import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, MenuItem, Typography } from "@material-ui/core";
import { Frame } from "components/common/Frame";
import FiltersSidebar from "components/FiltersSidebar";
import CustomGrid from "components/common/CustomGrid";
import ProductCard from "components/common/ProductCard";
import { boxes } from "temporary";

const useStyles = makeStyles((theme: any) => ({
  scrollContainer: {
    [theme.breakpoints.down("sm")]: {
      overflowX: "auto",
      flexWrap: "nowrap",
      ...theme.mixins.disableScrollBar,
    },
  },
  itemContainer: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "80vw",
    },
  },
}));

const CataloguePage = () => {
  const classes = useStyles();

  const getTop = () => {
    return (
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h5">60 боксів</Typography>
        </Grid>
        <Grid item>
          <TextField variant="outlined" value="-price" select>
            <MenuItem value="-price">Від найдешевших до найдорожчих</MenuItem>
            <MenuItem value="price">Від найдорожчих до найдешевших</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    );
  };

  return (
    <Frame sidebar={<FiltersSidebar />} top={getTop()}>
      <CustomGrid
        container
        xsSpacing={2}
        mdSpacing={5}
        className={classes.scrollContainer}
      >
        {boxes.map((box) => {
          return (
            <CustomGrid
              item
              key={box.id}
              className={classes.itemContainer}
              md={4}
            >
              <ProductCard
                img={box.img}
                title={box.title}
                description={box.description}
                price={box.price}
              />
            </CustomGrid>
          );
        })}
      </CustomGrid>
    </Frame>
  );
};

export default CataloguePage;
