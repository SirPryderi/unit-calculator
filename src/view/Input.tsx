import { InputAdornment } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";
import React from "react";

export type InputProps = {
  type: React.HTMLInputTypeAttribute;
  fieldName: string;
  label?: string;
  icon?: React.ReactElement;
};

const Input = (props: InputProps) => {
  return (
    <Field
      component={TextField}
      name={props.fieldName}
      type={props.type}
      label={props.label || props.fieldName}
      margin="normal"
      variant="standard"
      fullWidth={true}
      InputProps={
        props.icon
          ? {
              startAdornment: (
                <InputAdornment position="start">{props.icon}</InputAdornment>
              ),
            }
          : undefined
      }
    />
    // {formik.errors[props.fieldName] &&
    //   formik.touched[props.fieldName] &&
    //   formik.errors[props.fieldName]}
  );
};

export default Input;
