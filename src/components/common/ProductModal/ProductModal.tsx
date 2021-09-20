import React from "react";
import Image from "next/image";
import CloseIcon from "@material-ui/icons/Close";
import {
  Dialog,
  DialogContent,
  DialogProps,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";

interface IProps extends DialogProps {
  item: any;
  onClose: any;
}

const ProductModal: React.FC<IProps> = ({ item, onClose, ...props }) => {
  const { img, title, description } = item;

  const handleClose = (e: React.MouseEvent) => {
    onClose(e, null);
  };

  return (
    <Dialog maxWidth="lg" {...props} onClose={onClose}>
      <IconButton
        onClick={handleClose}
        style={{ position: "absolute", top: 0, right: 0, zIndex: 2500 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent style={{ padding: "56px 40px 80px" }}>
        <Grid container justifyContent="space-between">
          <Grid
            item
            style={{
              marginRight: "100px",
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
              width: 460,
              height: 460,
            }}
          >
            <Image src={img} layout="fill" objectFit="cover" alt={title} />
          </Grid>
          <Grid item xs>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography>{title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography>{description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
