import { CheckOutlined } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PaymentSuscription.css";

const { REACT_APP_API_ENDPOINT } = process.env;
const { REACT_APP_PRODUCT_KEY } = process.env;

const ProductDisplay = ({ id }) => (
  <section className="suscriptions-container">
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ minWidth: 275, maxWidth: 500 }}>
        <CardContent>
          <Typography variant="h3" component="div">
            Plan fotografo Pro
          </Typography>
          <Typography variant="h4" sx={{ mb: 1.5 }} color="text.secondary">
            $1.00 / mensual
          </Typography>
          <ul>
            <li>Sesiones Ilimitadas</li>
            <li>Calendario Personal</li>
            <li>Manejo de Sesiones</li>
            <li>Preview de fotos de cada sesión</li>
            <li>Link de descarga de sesión para el cliente</li>
            <li>Acceso a cientos de clientes</li>
          </ul>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <form action={`${REACT_APP_API_ENDPOINT}/payments/create-checkout-session`} method="POST">
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value={`${REACT_APP_PRODUCT_KEY}`} />
            <input type="hidden" name="userId" value={`${id}`} />

            <Button type="submit" size="small" variant="contained">
              Pagar
            </Button>
          </form>
        </CardActions>
      </Card>
    </Grid>
  </section>
);

const SuccessDisplay = ({ sessionId, id }) => {
  return (
    <section>
      <div className="product Box-root">
        <Logo />
        <div className="description Box-root">
          <h3>La Suscripción se a activado con éxito!</h3>
        </div>
      </div>
      <form action={`${REACT_APP_API_ENDPOINT}/payments/create-portal-session`} method="POST">
        <input type="hidden" id="session-id" name="session_id" value={sessionId} />
        <button id="checkout-and-portal-button" type="submit">
          Gestiona tu información de facturación
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section className="section-container">
    <p>{message}</p>
  </section>
);

export default function SubscriptionPage() {
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState("");

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setSuccess(true);
      setSessionId(query.get("session_id"));
    }

    if (query.get("canceled")) {
      setSuccess(false);
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, [sessionId]);

  if (!success && message === "") {
    return <ProductDisplay id={id} />;
  } else if (success && sessionId !== "") {
    return <SuccessDisplay sessionId={sessionId} id={id} />;
  } else {
    return <Message message={message} />;
  }
}

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="14px"
    height="16px"
    viewBox="0 0 14 16"
    version="1.1"
  >
    <defs />
    <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="0-Default" transform="translate(-121.000000, -40.000000)" fill="#E184DF">
        <path
          d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
          id="Pilcrow"
        />
      </g>
    </g>
  </svg>
);
