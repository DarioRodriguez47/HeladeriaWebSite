import React from "react";
import "./Header.css";
import "../../Assets/fontawesome/css/all.min.css";
import image1 from "../../Assets/img/image1.webp";

const Header = () => {
  return (
    <header id="inicio" style={{ backgroundImage: `url(${image1})` }}>
      <div className="grid container-center">
        <div className="text-content full">
          <h3>#Helados</h3>
          <h2>Artesanal</h2>
          <h1>Helado</h1>
          <button className="btn light">Menú</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
