import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { Field } from "formik";
import { FieldToTextField } from "components/common/FormField";
import withCorporateClientsForm, { IValues } from "./withCorporateClientsForm";

interface IProps {
  onSubmit: (values: IValues) => void;
}

const CorporateClientsForm: React.FC<IProps> = (props) => {
  const { onSubmit } = props;
  return (
    <Grid container spacing={7}>
      <Grid item xs={12}>
        <Field
          label="Ім'я"
          fullWidth
          name="name"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          label="Назва компанії"
          fullWidth
          name="company_name"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          label="Email"
          fullWidth
          name="email"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          label="Контактний номер"
          fullWidth
          name="phone_number"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          label="Кількіcть боксів"
          fullWidth
          name="boxes_count"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          label="Бюджет на 1 бокс"
          fullWidth
          name="budget"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Field
              label="Коментар"
              fullWidth
              name="comment"
              variant="outlined"
              component={FieldToTextField}
              TextField={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary">
              Відправити
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withCorporateClientsForm(CorporateClientsForm);
