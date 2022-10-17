import { Select } from '@mui/material';
import { useField } from 'formik';
import React from 'react'
import "./FullRegistrationForm.css";

const CustomSelect = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props);


  return (
    <>
    <label>{label}</label>
    <Select 
    {...field} 
    {...props}
    className={meta.touched && meta.error ? "input-error" : ""}
    />
    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  )
}

export default CustomSelect