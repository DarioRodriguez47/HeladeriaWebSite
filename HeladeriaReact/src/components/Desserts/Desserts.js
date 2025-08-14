import React from "react";
import "./Desserts.css";

function Desserts() {
  return (
    <section className="postres">
      <div className="grid">
        <div className="span6 background"></div>
        <div className="span6">
          <div className="text-content lateral">
            <h1>POSTRES</h1>
            <h3>¡Helados y más!</h3>
            <p>
              Descubre nuestra variedad de postres: helados, tartas y dulces
              para todos los gustos. Perfectos para acompañar cualquier ocasión
              y disfrutar en familia o con amigos.
            </p>
            <button className="btn dark">Menú</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Desserts;
