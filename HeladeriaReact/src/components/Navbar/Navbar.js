import React from "react";
import "./Navbar.css";
import "../../Assets/fontawesome/css/all.min.css";

const Navbar = () => {
  return (
    <nav>
      <div className="grid container-center">
        <div className="enlaces">
          <a href="#inicio">Inicio</a>
          <a href="#sabores">Sabores</a>
          <a href="#eventos">Eventos</a>
          <a href="#nosotros">Nosotros</a>
        </div>

        <div className="sociales">
          <a href="" className="fab fa-facebook-f"></a>
          <a href="" className="fab fa-twitter"></a>
          <a href="" className="fab fa-instagram"></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
