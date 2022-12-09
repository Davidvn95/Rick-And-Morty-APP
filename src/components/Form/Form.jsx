import React from "react";
import { useState } from "react";
import stylesForm from "./Form.module.css";

const Form = () => {
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleOnChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({
            ...userData,
            [property]: value,
        });
    };

    return (
        <div className={stylesForm.form}>
            <div>
                <label>User Name</label>
                <input
                    name="username"
                    value={userData.username}
                    onChange={handleOnChange}
                    placeholder="Insert your name"
                    className={stylesForm.input}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    name="password"
                    value={userData.password}
                    onChange={handleOnChange}
                    placeholder="Insert your password"
                    className={stylesForm.input}
                />
            </div>
            <button>SUBMIT</button>
        </div>
    );
};

export default Form;
