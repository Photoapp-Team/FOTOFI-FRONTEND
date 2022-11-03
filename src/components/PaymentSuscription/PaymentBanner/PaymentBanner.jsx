import React from "react";
import "./PaymentBanner.css";
import bannerImage from "../../../images/paymentbanner.png";
import { Typography } from "@mui/material";

const PaymentBanner = (props) => {
  const { nombre } = props;
  return (
    <div className="payment-banner">
      <img src={bannerImage} />
     <p>Paga Mensualmente y Obten Excelentes Beneficios </p>
    </div>    
  );
};

export default PaymentBanner;

