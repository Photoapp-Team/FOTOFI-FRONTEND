import * as React from 'react';
import Box from '@mui/material/Box';
import "./PaymentDescription.css";
import { Link, Typography } from '@mui/material';
import Button from '../../Inputs/Button/Button';
import { useState } from 'react';

function PaymentDescription(props) {
  const { nombre } = props;
  const [clicked, setClicked] = useState('No');

  return (
    <div className= "payment-description">
      <Box className= "payment-box" 
        sx={{
          backgroundColor: '#f1f1f1',
          p: 3,
        }}
         >
        <Typography variant="h2" className= "typography-Style" align="center" sx={{
            marginBottom: '2rem',
            mt: 20,            
          }} gutterBottom>      
         Aviso de Privacidad FOTOFI S.A. {nombre}
        </Typography>
        <Typography align="center"
          variant="body1"
          sx={{
            marginBottom: '2rem',
          }}
        >
        Los datos personales que nos proporciona son utilizados estrictamente en la realización de funciones propias de nuestra empresa y por ningún motivo serán transferidos a terceros.
        </Typography>
        <Typography align="center"
          variant="body1"
          sx={{
            marginBottom: '2rem',
          }}
        > 
        A nuestros clientes les notificamos que sus datos personales que registren dentro de nuestra plataforma serán públicos, FOTOFI no se hace responsable del mal manejo de la información proporcionada.   
        </Typography>
        <Button 
        type="submit"
        name={"LO QUIERO"}
        className={"button-login"}

        ></Button>
        <Link
            component="button"
            variant="body2"
            onClick={() => {
                console.info("I'm a button.");
            }}
            >
            No quiero este increible beneficio  
            </Link>  
      </Box>
    </div>
  );
}

export default PaymentDescription;