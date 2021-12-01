import React from "react";
import suma from "../images/suma.png";
import resta from "../images/resta.png";
import multiplicacion from "../images/multiplicacion.png";
import division from "../images/division.png";
import stylesLG from "./HomePage.module.css";
import { Link } from "react-router-dom";
export function HomePage() {
  return (
    <ul className={stylesLG.LeccionGrid}>
      <li>
        <Link to="/suma">
          <img className={stylesLG.ImgStyle} src={suma} alt="Suma" />
        </Link>
      </li>
      <li>
        <Link to="/resta">
          <img className={stylesLG.ImgStyle} src={resta} alt="Resta" />
        </Link>
      </li>
      <li>
        <Link to="/multiplicacion">
          <img className={stylesLG.ImgStyle} src={multiplicacion} alt="Multiplicacion" />
        </Link>
      </li>
      <li>
        <Link to="/division">
          <img className={stylesLG.ImgStyle} src={division} alt="Division" />
        </Link>
      </li>
    </ul>
  );
}
