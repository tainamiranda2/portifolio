import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export const Navbar=()=>{

    return(
<navbar>
<ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/Sobre">Sobre</Link>
    </li>
    <li>
    <Link to="/contatos">Contatos</Link>
    </li>
</ul>
</navbar>
    )
}