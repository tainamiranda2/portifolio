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
    <Link to="/contatos">Contato</Link>
    </li>
    <li>
    <Link to="/experiencia">Experiência</Link>
    </li>
    <li>
    <Link to="/formacao">Formação</Link>
    </li>
</ul>
</navbar>
    )
}