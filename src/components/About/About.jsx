import React from "react";
import myPhoto from "./../imagenes/myPhoto.jpg";
import stylesAbout from "./About.module.css";

const About = () => {
    return (
        <div className={stylesAbout.contentAbout}>
            <img
                src={myPhoto}
                alt="My profile photo"
            />
            <div>
                <p>
                    Hola, soy David Vergara, tengo 27 años de edad de Colombia. Hace 3
                    meses tomé la decisión de empezar a aprender Desarrollo Web en
                    SoyHenry y, hoy 7 de diciembre de 2022, me place presentandoles mi
                    primera APP.
                </p>
                <br />
                <p>
                    Se trata de una app de los personajes de la serie animada Rick And
                    Morty, la cuá les permitirá concocer todos los personajes de la serie
                    en una tarjeta con información a cerca de cada uno de ellos.
                </p>
            </div>
        </div>
    );
};

export default About;
