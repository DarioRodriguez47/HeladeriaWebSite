import React from "react";
import "./About.css";

function About() {
  return (
    <section id="nosotros" className="lugar">
      <div className="grid">
        <div className="span6">
          <div className="text-content lateral">
            <h1>Nuestro lugar</h1>
            <h3>¡Helado frente al mar!</h3>
            <p>
              Disfruta de nuestros helados artesanales en un ambiente único
              frente al mar. Un lugar pensado para compartir momentos especiales
              y refrescarte con los mejores sabores.
            </p>
            <button className="btn dark">Leer más</button>
          </div>
        </div>
        <div className="span6 background"></div>
      </div>
    </section>
  );
}

export default About;
