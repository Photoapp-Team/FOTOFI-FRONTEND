import React from 'react'
import { ReactComponent as ReactLogo } from "../../assets/Logo/Logo.svg";
import PaymentBanner from "../../components/PaymentSuscription/PaymentBanner/PaymentBanner";
import PaymentDescription from "../../components/PaymentSuscription/PaymentDescription/PaymentDescription";
import Button from "../../components/Inputs/Button/Button";
import "./PaymentPage.css";
import Link from '@mui/material/Link';


const PaymentPage = () => {
  return (
    <>
    <div classPayment="payment-page"></div>
    <PaymentBanner ></PaymentBanner>
    <PaymentDescription></PaymentDescription>
    </>
  )
}
  
export default PaymentPage;

