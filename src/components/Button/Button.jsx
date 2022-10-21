import React from 'react'


const Button = (props) => {
  console.log(props)
  return <button {...props}>{props.name}</button>;
  
};

export default Button;
