const CheckBox = ({ checkBoxOptions, name, formik }) => {
  return (
    <div className="formControl checkBox">
      <div>
        {checkBoxOptions.map((item) => {
          return (
            <div key={item.value}>
              <input
                type="checkbox"
                id={item.value}
                name={name}
                value={item.value}
                checked={formik.values[name].includes(item.value)}
                onChange={formik.handleChange}
              />
              <label htmlFor={item.value}>{item.label}</label>
            </div>
          );
        })}
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default CheckBox;
