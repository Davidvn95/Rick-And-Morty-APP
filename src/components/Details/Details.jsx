import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import stylesDetails from "./Details.module.css";

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    // Función que hace el llamado de la info de cada personaje;
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    //   console.log(char);
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese nombre");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    // Forma que encontré para obtener el origen del personaje
    const { origin } = character;
    const propertyOrigin = { ...origin };
    console.log(character);
    // Renderización del componente;
    return (
        <div className={stylesDetails.container}>
            <Link to="/home">
                <button className={stylesDetails.button}>Back</button>
            </Link>
            <div className={stylesDetails.containerimgInfo}>
                <img src={character.image} />
                <div>
                    <h2>{`NOMBRE: ${character.name}`}</h2>
                    <ul>
                        <li>{`Status: ${character.status}`}</li>
                        <li>{`Species: ${character.species}`}</li>
                        <li>{`Gender: ${character.gender}`}</li>
                        <li>{`Type: ${character.type}`}</li>
                        <li>{`Origin: ${propertyOrigin.name}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Detail;
