import React, {Component} from 'react';
import PropTypes from "prop-types";

class Gif extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            gif: ""
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    componentDidMount(){
        console.log("Me monté!");
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=zSeRW2fzCbFDRHw7ITOU4x8cjIJ2Hzgk&tag=&rating=g', this.mostrarGif)
    }

    mostrarGif= (data) => {
        this.setState(
            {
                gif: data.data.image_url
            }
        )
    }

    componentDidUpdate(){
        console.log("Me actualicé!");
    }

    render () {
        console.log("Estoy renderizando!");
        let contenido;

        if (this.state.gif == ""){
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif}></img>
        }
        return (
            <div>
               {contenido}
               <button>Random Gif!</button>
            </div>
        );  
    }
  }


export default Gif;