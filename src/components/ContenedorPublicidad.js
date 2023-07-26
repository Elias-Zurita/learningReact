import React from 'react';

function ContenedorPublicidad(props) {
    return (
      <div>
        <p>---Inicio de espacio Publicitario---</p>
        {props.children}
        <p>---Fin de espacio Publicitario---</p>
      </div>
    );
  }

export default ContenedorPublicidad;