import { Select, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useField } from "formik";
import React from "react";
import "../Forms/FullRegistrationForm/FullRegistrationForm.css";

const CssSelect = styled(Select)({
  // When the input is focused
  "& label.Mui-focused": {
    color: "#023E8A",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#023E8A",
  },
  // Initial color of the Input Border without focus
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#023E8A",
    },
    // Border color when hovered
    "&:hover fieldset": {
      borderColor: "#42B7D0",
      border: "2px solid #42B7D0",
    },
    // Border color when clicking the input
    "&.Mui-focused fieldset": {
      borderColor: "#023E8A",
      border: "3px solid #42B7D0",
    },
    "&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
      color: "#023E8A",
    },
  },
});

const CustomSelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log({ field });

  return (
    <>
      {/* <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel> */}
      <Select  labelId="demo-controlled-open-select-label"
          {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomSelect;
