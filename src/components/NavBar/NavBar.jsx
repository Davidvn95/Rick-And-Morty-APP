import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
    return (
        <div className={styles.navBar}>
            <NavLink to="/home">
                <button className={styles.button}>Home</button>
            </NavLink>
            <NavLink to="/about">
                <button className={styles.button}>About</button>
            </NavLink>
            <SearchBar
                onSearch={props.onSearch}
                getRamdomInt={props.getRamdomInt}
                cleanUp={props.cleanUp}
            />
            <NavLink to="/login">
                <button className={styles.button}>Logaut</button>
            </NavLink>
        </div>
    );
}
