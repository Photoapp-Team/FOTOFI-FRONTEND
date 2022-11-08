import { useElements, useStripe } from "@stripe/react-stripe.js";
import React, { useState } from "react";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createSusbscription = async () => {
    try {
    } catch (error) {
      alert("Payment failed, " + error.message);
    }
  };

  return (
    <div>
      Nombre: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Correo: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <CardElement />
      <br />
      <button onClick={createSusbscription}>Subscribete = 5INR</button>
    </div>
  );
}

export default PaymentForm;
