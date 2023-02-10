import { useFormik } from "formik";
import * as Yup from "yup";
import CheckBox from "./common/CheckBox";
import Input from "./common/Input";
import RadioInput from "./common/RadioInput";
import SelectComponent from "./common/SelectComponent";

const onSubmit = (values) => {
  console.log(values);
};

const checkBoxOptions = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

const selectOptions = [
  { label: "Select Nationality", value: "" },
  { label: "Iran", value: "0" },
  { label: "United States", value: "1" },
  { label: "Germany", value: "2" },
];

const radioOptions = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];

const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  passwordConfirm: "",
  gender: "",
  nationality: "",
  interests: [],
  terms: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(3, "Name Length Cannot be Less than 3 Characters"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  number: Yup.string()
    .required("Phone Number is Required")
    .matches(/^\d+$/, "You Can Only use Numbers")
    .matches(/^[0-9]{11}/, "Invalid Phone Number"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters,\n1 Uppercase, 1 Lowercase and 1 Number"
    ),
  passwordConfirm: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  gender: Yup.string().required("Gender is Required"),
  nationality: Yup.string().required("Nationality is Required"),
  interests: Yup.array()
    .min(1, "At least Select One Expertise")
    .required("Selecting Checkbox is Required"),
  terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* <div className="formControl">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...formik.getFieldProps("name")} />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div> */}
        <Input formik={formik} name="name" label="Name" />
        {/* <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...formik.getFieldProps("email")} />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div> */}
        <Input formik={formik} name="email" label="Email" />
        {/* <div className="formControl">
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" {...formik.getFieldProps("number")} />
          {formik.errors.number && formik.touched.number && (
            <div className="error">{formik.errors.number}</div>
          )}
        </div> */}
        <Input formik={formik} name="number" label="Phone Number" />
        {/* <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div> */}
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        {/* <div className="formControl">
          <label htmlFor="passwordConfirm">Password Confirmation</label>
          <input
            type="password"
            id="passwordConfirm"
            {...formik.getFieldProps("passwordConfirm")}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="error">{formik.errors.passwordConfirm}</div>
          )}
        </div> */}
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password Confirmation"
          type="password"
        />
        <RadioInput name="gender" formik={formik} radioOptions={radioOptions} />
        <SelectComponent
          name="nationality"
          formik={formik}
          selectOptions={selectOptions}
        />
        <CheckBox
          name="interests"
          formik={formik}
          checkBoxOptions={checkBoxOptions}
        />
        {/* Terms & Conditions */}
        <div className="formControl termsCheckBox">
          <div>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value={true}
              checked={formik.values.terms}
              onChange={formik.handleChange}
            />
            <label htmlFor="terms">Accept Terms & Conditions</label>
          </div>
          {formik.errors.terms && formik.touched.terms && (
            <div className="error">{formik.errors.terms}</div>
          )}
        </div>
        <button
          className={!formik.isValid ? "forbidden" : ""}
          type="submit"
          // disabled={!formik.isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
