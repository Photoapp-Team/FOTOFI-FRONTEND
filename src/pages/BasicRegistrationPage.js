import React from "react";
import BasicRegistrationForm from "../components/RegistrationForm/BasicRegistrationForm";
import { ReactComponent as ReactLogo } from "../components/assets/Logo/Logo.svg";
import "./BasicRegistrationPage.css";

const BasicRegistrationPage = () => {
  return (
    <>
      <div>
        <ReactLogo className="logo-container" />
      </div>
      <div>
        <BasicRegistrationForm />
      </div>
    </>
  );
};

export default BasicRegistrationPage;
