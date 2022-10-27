import React from "react";
import BasicRegistrationForm from "../../components/Forms/BasicRegistrationForm";
import { ReactComponent as ReactLogo } from "../../assets/Logo/Logo.svg";
import "./BasicRegistrationPage.css";

const BasicRegistrationPage = () => {
  return (
    <div className="basic">
      <div className="logo-container">
        <ReactLogo />
      </div>
      <div>
        <BasicRegistrationForm />
      </div>
    </div>
  );
};

export default BasicRegistrationPage;
