import React from "react";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import "./LoginPage.css";
import FotofiLogo from "../../assets/Logo/fotofi_logo_white.png";
const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-logo-container">
        <img src={FotofiLogo} alt="FOTOFI_LOGO" className="login-fotofi-logo" />
      </div>
      <div className="login-form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
