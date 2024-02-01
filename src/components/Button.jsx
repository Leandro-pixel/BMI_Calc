import "./Button.css"

import React from 'react'
//componentizando os elementos para padronizar
const Button = ({id, text, action}) => {

    const handleAction = (e) => {
        action(e);
    }; 

  return (
    <button id={id} onClick={handleAction}>
        {text}
        </button>
  )
}

export default Button