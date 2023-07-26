import './App.css';
import React from 'react';
import Tirapeliculas from "./components/Tirapeliculas";
import ContenedorPublicidad from "./components/ContenedorPublicidad";
import Contador from "./components/Contador";
import Gif from "./components/Gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <main>
        <Gif />
        <ContenedorPublicidad>
          <h2>Wooow! Publicad!</h2>
        </ContenedorPublicidad>
        <Tirapeliculas/>
        <Contador inicial={0}/>
        <ContenedorPublicidad>
          <ul>
            <li>Public 1</li>
            <li>Public 2</li>
            <li>Public 3</li>
          </ul>
        </ContenedorPublicidad>
      </main>

      </header>
    </div>
  );
}

export default App;
