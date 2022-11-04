import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useField } from "formik";
import React from "react";

const CssTextField = styled(TextField)({
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
      border: "1px solid #42B7D0",
    },
    // Border color when clicking the input
    "&.Mui-focused fieldset": {
      borderColor: "#023E8A",
      border: "1px solid #42B7D0",
    },
    "&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
      color: "#023E8A",
    },
    "& input::placeholder": {
      fontSize: "5px",
    },
  },
});

const CustomInput = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <CssTextField
        {...field}
        {...props}
        className={meta.touched && meta.error ? "Mui-error" : ""}
        InputLabelProps={{
          style: {
            color: "#023E8A",
          },
        }}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default CustomInput;
