import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';

export const Navbar=()=>{
const [ativado,setAtivado]=useState(true)

    return(
<navbar>
 
<div >
   {ativado?  ativado && (
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
 <button className="button-nav" onClick={() => setAtivado(!ativado)} >Fechar</button>

 </ul>

  ) :(
<button className="button-nav" onClick={() => setAtivado(!ativado)} >Ver</button>
   )}
   
</div>

</navbar>
    )
}