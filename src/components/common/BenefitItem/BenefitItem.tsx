import React from "react";
import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";

interface IProps {
  img: string;
  title: string;
  description: string;
}

const BenefitItem: React.FC<IProps> = ({ img, title, description }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Image src={img} width={40} height={40} alt={title} />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BenefitItem;
