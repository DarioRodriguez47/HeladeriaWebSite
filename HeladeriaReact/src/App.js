import React from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Flavors from "./components/Flavors/Flavors";
import LactoseFree from "./components/LactoseFree/LactoseFree";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Desserts from "./components/Desserts/Desserts";
import IceCreamImage from "./components/IceCreamImage/IceCreamImage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Flavors />
      <LactoseFree />
      <About />
      <Events />
      <Desserts />
      <IceCreamImage />
      <Footer />
    </>
  );
}

export default App;
