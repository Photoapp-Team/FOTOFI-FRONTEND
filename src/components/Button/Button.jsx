import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <div className="button-container">
                  <button {...props}>
                    Submit
                  </button>
                </div>
  )
}

export default Button