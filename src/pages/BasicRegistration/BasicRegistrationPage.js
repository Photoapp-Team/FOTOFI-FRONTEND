import React from "react";
import BasicRegistrationForm from "../../components/BasicRegistrationForm";
import { ReactComponent as ReactLogo } from "../../components/assets/Logo/Logo.svg";
import "./BasicRegistrationPage.css";

const BasicRegistrationPage = () => {
  return (
    <div className="basic">
      <div>
        <ReactLogo className="logo-container" />
      </div>
      <div>
        <BasicRegistrationForm />
      </div>
    </div>
  );
};

export default BasicRegistrationPage;
