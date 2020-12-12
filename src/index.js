import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./components/CounterApp";
//import PrimeraApp from "./components/Primera-App";
import "./index.css";

//const saludo = <h1>Hola Mundo</h1>;
const divRoot = document.querySelector("#root");
// renderizar en la etiqueta correspondiente - permite crear componentes y hacer la estructura
ReactDOM.render(
  //<PrimeraApp saludo="Hola Mundo" />,
  <CounterApp />,
  divRoot
);

// otra manera no muy conveniente
//document.body.append( saludo );
