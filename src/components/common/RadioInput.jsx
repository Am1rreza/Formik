import React from "react";

const RadioInput = ({ name, formik, radioOptions }) => {
  return (
    <section className="radioBox">
      <div>
        {radioOptions.map((item) => {
          return (
            <div key={item.value}>
              <input
                type="radio"
                id={item.value}
                value={item.value}
                name={name}
                onChange={formik.handleChange}
                checked={formik.values[name] === item.value}
              />
              <label htmlFor={item.value}>{item.label}</label>
            </div>
          );
        })}
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </section>
  );
};

export default RadioInput;
