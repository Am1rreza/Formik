const SelectComponent = ({ selectOptions, name, formik }) => {
  return (
    <div className="formControl">
      <select name={name} id={name} {...formik.getFieldProps(name)}>
        {selectOptions.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectComponent;
