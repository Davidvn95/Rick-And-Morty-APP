import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Detail from "./components/Details/Details";
import Form from "./components/Form/Form";
import { Titulo } from "./components/Titulo/Titulo";
import { useState } from "react";
import RickyMorty from "./components/imagenes/RyM.png";
import { Route, useLocation } from "react-router-dom";

function App() {
    // Creando estado de caracteres
    const [characters, setCharacters] = useState([]);

    // Render condicional Nav;
    const location = useLocation();

    // Función que hace los pedidos de la API para guardar en el estado
    const onSearch = (character) => {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    for (let element of characters) {
                        if (data.id === element.id)
                            return window.alert("El personaje ya ha sido agregado");
                    }
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            });
    };

    // Función que agrega Tarjetas ramdom;
    const getRamdomInt = (numMax) => Math.floor(Math.random() * numMax);

    // Función que elimina tarjetas cuando se le dá en la X
    const onClose = (event) => {
        const id = parseInt(event.target.id);
        const newState = characters.filter((character) => character.id !== id);
        console.log(newState);
        setCharacters([...newState]);
    };

    // Función para limpiar el home
    const cleanUp = () => {
        setCharacters([]);
    };

    // Renderiza en pantalla
    return (
        <div className="App" style={{ padding: "3px" }}>
            {location.pathname !== "/login" && (
                <Route path="/">
                    <NavBar
                        onSearch={onSearch}
                        getRamdomInt={getRamdomInt}
                        cleanUp={cleanUp}
                    />
                </Route>
            )}
            <Route exact path="/">
                <Titulo />
                {/* <h1>Welcome to RICK AND MORTY's app</h1> */}
                <img src={RickyMorty} alt="imagen Rick and Morty" />
            </Route>
            <Route exact path="/home">
                <Cards characters={characters} onClose={onClose} />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route excat path="/detail/:detailId">
                <Detail />
            </Route>
            <Route exact path="/login">
                <Form />
            </Route>
        </div>
    );
}

export default App;
