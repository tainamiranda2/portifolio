import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className={`toggle-icon ${isOpen ? "active" : ""}`}></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/sobre" onClick={toggleMenu}>
              Sobre
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contatos" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/experiencia" onClick={toggleMenu}>
              Experiência
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/formacao" onClick={toggleMenu}>
              Formação
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
