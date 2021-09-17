export type PromoCardType = {
  id: number;
  text: string;
  backgroundImage: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "default" | "primary" | "secondary" | undefined;
  buttonText: string;
  route: any;
};
