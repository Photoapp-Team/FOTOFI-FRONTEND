import React from 'react'
import { ReactComponent as ReactLogo } from "../../assets/Logo/Logo.svg";
import PaymentPage from "../../components/Forms/PaymentPage/PaymentPage";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div classPayment="">PaymentPage</div>
  )
}

export default PaymentPage;


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


