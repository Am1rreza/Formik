import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
  });

  // Handlers
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
