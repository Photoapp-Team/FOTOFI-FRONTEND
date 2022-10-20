import React from "react";
import { ReactComponent as ReactLogo } from "../../components/assets/Logo/Logo.svg";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="logo-container">
        <ReactLogo />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
