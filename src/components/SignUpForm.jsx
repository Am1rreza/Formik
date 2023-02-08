const SignUpForm = () => {
  return (
    <div>
      <form>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="formControl">
          <label htmlFor="pass">Password</label>
          <input type="text" id="pass" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
