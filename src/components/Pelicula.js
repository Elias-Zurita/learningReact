import React from 'react';
import "./Pelicula.css";
import PropTypes from "prop-types";

function Pelicula(props) {

  let listadoDeGeneros; 
  
  if (props.generos != null){
    listadoDeGeneros = 
      <ul>
        {props.generos.map( (genero, i) => <li key = {genero + i}> {genero}</li>)} 
      </ul>
  } else {
    listadoDeGeneros = "";
  }
    
    return (
      <div>
        <h2 className='tituloPelicula'>{props.titulo}</h2>
        <p>Rating: {props.rating}</p>
        {listadoDeGeneros}
      </div>
      /* El metodo map itera sobre cada genero y devuelve un resultado por cada uno. 
      el metodo map nos permite usar i como el iterador. Se agrega la Key para poder asignarle un valor i a cada genero
      */
    );
  }

  Pelicula.defaultProps = {
    rating: "Esta pelicula aun no tiene puntuacion",
    generos: null
  }

  Pelicula.propTypes = {
    rating: PropTypes.number,
    titulo: PropTypes.string
  }

export default Pelicula;