import React from 'react';
import '../css/boton.css';

function Boton(props){

  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };


  return(
    <div
      className={`boton-contenedor ${esOperador(props.children)?'operador':''}`.trimEnd()}
      // trimend: quita los espacios de la clase '' que qeuda al final 
      onClick={() => props.manejarClic(props.children)}>
        {props.children}
    </div>
  );
}

export default Boton;