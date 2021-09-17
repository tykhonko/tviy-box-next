import React, { useState } from "react";
import Image from "next/image";
import { Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/common/Button";
import clsx from "clsx";

interface IProps {
  img: string;
  title: string;
  description: string;
  objectPosition?: string;
  price?: number;
  isCorporate?: boolean;
  onOpen?: () => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100% + ${theme.spacing(2)}px)`,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  isSelected: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    border: "4px solid #E4443A",
    borderRadius: 6,
  },
  selectedCounter: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    width: 32,
    height: 32,
    backgroundColor: "#E4443A",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  removeFromCard: {
    position: "absolute",
    top: 32,
    left: 32,
    zIndex: 10,
    padding: 12,
    backgroundColor: "rgba(0, 0, 0, .8)",
    color: "white",
    borderRadius: 6,
  },
}));

const ProductCard: React.FC<IProps> = ({
  img,
  title,
  description,
  price,
  isCorporate,
  objectPosition,
  onOpen,
}) => {
  const classes = useStyles();

  const [inCart, setInCart] = useState(0);

  const handleAddToCard = () => {
    setInCart((inCart) => inCart + 1);
  };

  const handleRemoveFromCard = () => {
    setInCart((inCart) => inCart - 1);
  };

  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
      alignContent="space-between"
    >
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ position: "relative" }}>
            {inCart > 0 && (
              <div
                className={clsx({
                  [classes.selectedCounter]: inCart,
                })}
              >
                {inCart}
              </div>
            )}
            {inCart > 0 && (
              <ButtonBase
                className={clsx({
                  [classes.removeFromCard]: inCart > 0,
                })}
                onClick={handleRemoveFromCard}
              >
                Прибрати з кошику
              </ButtonBase>
            )}
            <div className={classes.imageContainer}>
              <div
                className={clsx({
                  [classes.isSelected]: inCart > 0,
                })}
              />

              <Image
                src={img}
                layout="responsive"
                width={360}
                height={360}
                objectFit="cover"
                objectPosition={objectPosition}
                alt={title}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item xs={12}>
                <Typography variant="body1">{title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">{description}</Typography>
              </Grid>
              {price && (
                <Grid item xs={12}>
                  <Typography variant="subtitle1">{price} грн</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10}>
        <Grid container spacing={2} alignItems="flex-end">
          {isCorporate ? (
            <Grid item xs={12}>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                onClick={onOpen}
              >
                Зв’язатися
              </Button>
            </Grid>
          ) : (
            <>
              <Grid item xs={12}>
                <Button fullWidth color="primary" variant="contained">
                  Змінити оформлення
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="secondary"
                  variant="contained"
                  onClick={handleAddToCard}
                >
                  Додати до кошика
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
