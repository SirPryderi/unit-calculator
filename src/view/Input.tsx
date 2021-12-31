import { useFormikContext } from "formik";
import React from "react";

export type InputProps = {
  type: React.HTMLInputTypeAttribute;
  fieldName: string;
};

const Input = <T extends Record<string, any>>(props: InputProps) => {
  const formik = useFormikContext<T>();

  return (
    <div>
      <label htmlFor={props.fieldName}>{props.fieldName}</label>
      <br />
      <input
        type={props.type}
        name={props.fieldName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[props.fieldName]}
      />
      {formik.errors[props.fieldName] &&
        formik.touched[props.fieldName] &&
        formik.errors[props.fieldName]}
    </div>
  );
};

export default Input;
