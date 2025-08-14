import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="grid container-center">
          <div className="items">
            <h2>Direccion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore saepe fugit quod maxime corrupti eligendi explicabo facere
              facilis hic, laborum expedita a. Vitae, eveniet esse mayores
              tempore officiis et.
            </p>
          </div>
          <div className="items">
            <h2>Enlaces</h2>
            <ul>
              <li>
                <a href="#helados">Helados</a>
              </li>
              <li>
                <a href="#tortas">Tortas</a>
              </li>
              <li>
                <a href="#dulces">Dulces</a>
              </li>
              <li>
                <a href="#postres">Postres</a>
              </li>
              <li>
                <a href="#nosotros">Sobre nosotros</a>
              </li>
              <li>
                <a href="#contacto">Contactanos</a>
              </li>
              <li>
                <a href="#menu">Nuestro menú</a>
              </li>
              <li>
                <a href="#delivery">Delivery y envíos</a>
              </li>
              <li>
                <a href="#empleos">Empleos</a>
              </li>
            </ul>
          </div>
          <div className="items">
            <h2>Horario</h2>
            <p>
              Todos los dias <br />
              10AM - 8PM
            </p>
          </div>
          <div className="items">
            <div>
              <h2>Contacto</h2>
              <p>
                info@misitio.com <br />
                Tel: 914-123-456
              </p>
            </div>
            <div className="sociales">
              <a
                href="https://facebook.com"
                className="fab fa-facebook-f"
                aria-label="Facebook"
              ></a>
              <a
                href="https://twitter.com"
                className="fab fa-twitter"
                aria-label="Twitter"
              ></a>
              <a
                href="https://instagram.com"
                className="fab fa-instagram"
                aria-label="Instagram"
              ></a>
            </div>
          </div>
          <div className="items subs">
            <h2>Subscribete</h2>
            <input type="text" placeholder="Ingrese su email" />
            <button className="btn dark">Enviar</button>
          </div>
        </div>
      </footer>
      <div className="copy">
        <p>© 2021. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
