import React, {Component} from 'react';
import Pelicula from "./Pelicula";

class Tirapeliculas extends Component {
  
  lanzarAlerta(){
    alert("Me clickeaste")
  }
  cambiarGris(){
    document.querySelector("main").style.backgroundColor = "grey"
  }
  cambiarRosa(){
    document.querySelector("main").style.backgroundColor = "Pink"
  }
    render() {
      return (
        <div onClick={ this.lanzarAlerta } onMouseOver={ this.cambiarGris } onMouseOut={ this.cambiarRosa }>
          <Pelicula generos={["Fantasia", "Aventuras"]} rating="8.3" titulo="Harry Potter"/>
          <Pelicula generos={["Fantasia", "Ciencia Ficcion"]} rating="2.5" titulo="Avatar"/>
          <Pelicula generos={["Romantica", "Drama"]} rating="6.7" titulo="Titanic"/>
          <Pelicula generos={["Familiar", "Fantasia"]} rating="1.4" titulo="Toy Story"/>
          <Pelicula generos={["Accion", "Drama"]} rating="9.9" titulo="Rambo"/>
        </div>
      );
    }
  }

export default Tirapeliculas;
