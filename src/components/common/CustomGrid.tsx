import React, { forwardRef } from "react";
import clsx from "clsx";
import { Grid, GridProps, GridSpacing, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const BREAKPOINT_KEYS = ["xs", "sm", "md", "lg", "xl"] as const;

type CustomSpacings = {
  xsSpacing?: GridSpacing;
  smSpacing?: GridSpacing;
  mdSpacing?: GridSpacing;
  lgSpacing?: GridSpacing;
  xlSpacing?: GridSpacing;
};

interface IProps extends GridProps {
  component?: React.ElementType;
}

const getPropKey = (breakpointKey: Breakpoint) =>
  `${breakpointKey}Spacing` as keyof CustomSpacings;
const getStyleKey = (breakpointKey: Breakpoint, spacing: GridSpacing) =>
  `${breakpointKey}-spacing-${spacing}`;

const useStyles = makeStyles<Theme>((theme) => {
  const styles: any = {
    item: {},
  };

  BREAKPOINT_KEYS.forEach((key) => {
    SPACINGS.forEach((spacing) => {
      const themeSpacing = theme.spacing(spacing);
      if (themeSpacing === 0) return;

      styles[getStyleKey(key, spacing)] = {
        [theme.breakpoints.up(key)]: {
          width: `calc(100% + ${themeSpacing}px)`,
          margin: -themeSpacing / 2,
          "& > $item": {
            padding: themeSpacing / 2,
          },
        },
      };
    });
  });

  return styles;
});

const CustomGrid: React.FC<IProps & CustomSpacings> = forwardRef(
  ({ className, item, ...props }, ref) => {
    const classes = useStyles();
    const classNames: string[] = [];

    BREAKPOINT_KEYS.forEach((key) => {
      const propKey = getPropKey(key);
      const spacing = props[propKey];

      if (spacing) {
        delete props[propKey];
        classNames.push(classes[getStyleKey(key, spacing)]);
      }
    });

    return (
      <Grid
        ref={ref}
        className={clsx({ [classes.item]: item }, classNames, className)}
        item={item}
        {...props}
      />
    );
  }
);

CustomGrid.displayName = "CustomGrid";

export default CustomGrid;
