import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
    const [character, setCharacter] = useState("");

    const handleInputOnChange = (event) => {
        setCharacter(event.target.value);
    };
    const handleOnClick = () => {
        props.onSearch(character);
        setCharacter("");
    };

    const handleRamdom = () => {
        const numTargets = 827;
        const numRamdom = props.getRamdomInt(numTargets);
        props.onSearch(numRamdom);
    };
    return (
        <div className={styles.busqueda}>
            <input
                className={styles.input}
                type="search"
                placeholder="Ingrese un ID del personaje"
                onChange={handleInputOnChange}
                value={character}
            />
            <Link to="/home">
                <button
                    className={styles.button}
                    onClick={handleOnClick}>
                    Add
                </button>
            </Link>
            <Link to="/home">
                <button
                    className={styles.button}
                    onClick={handleRamdom}>
                    Ramdom
                </button>
            </Link>
            <Link to="/home">
                <button
                    className={styles.button}
                    onClick={props.cleanUp}>
                    Clean Up
                </button>
            </Link>
        </div>
    );
}
