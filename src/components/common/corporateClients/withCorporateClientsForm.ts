import * as Yup from "yup";
import withFormSubmission from "components/common/withFormSubmission";
import { emailSchema, nameSchema, phoneSchema } from "utils/validation";

export interface IValues {
  name: string;
  company_name: string;
  email: string;
  phone_number: string;
  boxes_count: string;
  budget: string;
  comment: string;
}

export interface IProps {
  onSubmit: (values: IValues) => void;
}

const withDetailsForm = withFormSubmission<IProps, IValues>({
  enableReinitialize: true,
  validationSchema: Yup.object({
    name: nameSchema(),
    company_name: Yup.string(),
    email: emailSchema(),
    phone_number: phoneSchema(),
    boxes_count: Yup.string(),
    budget: Yup.string(),
    comment: Yup.string(),
  }),
  mapPropsToValues: () => ({
    name: "",
    company_name: "",
    email: "",
    phone_number: "",
    boxes_count: "",
    budget: "",
    comment: "",
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
});

export default withDetailsForm;
