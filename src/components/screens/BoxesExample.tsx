import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "components/common/ProductCard";
import CustomGrid from "components/common/CustomGrid";
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

const BoxesExample = () => {
  const classes = useStyles();
  return (
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
  );
};

export default BoxesExample;
