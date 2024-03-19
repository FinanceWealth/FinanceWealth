"use client"

import { useState, useEffect } from 'react';

const ShowPass = ({quote, placeholder}) => {
    const [mostrar, setMostrar] = useState(false);
    
    const mostrarSenha = (event) => {
        event.preventDefault();
        !mostrar ? setMostrar(true) : setMostrar(false);
    };

    return(
        <>
            <input type={mostrar ? "text" : "password"} id="password" name="password" className="login-pass" placeholder={placeholder} />
            <button onClick={mostrarSenha} className="showPass">{quote}</button>
        </>
    );
};

export default ShowPass;