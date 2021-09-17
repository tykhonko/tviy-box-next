import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Sidebar } from "./common/Frame";

const budget = [
  {
    label: "Будь-який",
    name: "budget_any",
  },
  {
    label: "260-500грн",
    name: "budget_bla",
  },
  {
    label: "500-800грн",
    name: "budget_ble",
  },
  {
    label: "800-1130",
    name: "budget_blo",
  },
];

const category = [
  {
    label: "Не важливо",
    name: "doesnt_matter",
  },
  {
    label: "Для неї",
    name: "for_her",
  },
  {
    label: "Для нього",
    name: "for_him",
  },
  {
    label: "Категорія 1",
    name: "category_one",
  },
  {
    label: "Категорія 2",
    name: "category_two",
  },
  {
    label: "Категорія 3",
    name: "category_three",
  },
];

const FiltersSidebar = () => {
  return (
    <Sidebar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Бюджет</Typography>
                </Grid>
                <Grid item container>
                  {budget.map((item) => {
                    return (
                      <Grid key={item.name} item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              color="primary"
                              name={item.name}
                            />
                          }
                          label={
                            <Typography variant="subtitle2">
                              {item.label}
                            </Typography>
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Категорія</Typography>
                </Grid>
                <Grid item container>
                  {category.map((item) => {
                    return (
                      <Grid key={item.name} item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              color="primary"
                              name={item.name}
                            />
                          }
                          label={
                            <Typography variant="subtitle2">
                              {item.label}
                            </Typography>
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default FiltersSidebar;
