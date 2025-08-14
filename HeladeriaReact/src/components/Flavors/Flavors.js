import React from "react";
import "./Flavors.css";

function Flavors() {
  return (
    <section id="sabores" className="sabores">
      <div className="grid">
        <div className="span6 background"></div>
        <div className="span6">
          <div className="text-content lateral">
            <h1>NUESTROS SABORES</h1>
            <h3>¡Frescos y sabrosos!</h3>
            <p>
              Prueba nuestros sabores frescos y originales, elaborados con
              ingredientes naturales. Cada helado es una experiencia única para
              tu paladar.
            </p>
            <button className="btn dark">Menú</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flavors; // Ensure default export
