import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
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
    .matches(/^[0-9]{11}/, "Invalid Phone Number"),
  password: Yup.string().required("Password is Required"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...formik.getFieldProps("name")} />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...formik.getFieldProps("email")} />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" {...formik.getFieldProps("number")} />
          {formik.errors.number && formik.touched.number && (
            <div className="error">{formik.errors.number}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
