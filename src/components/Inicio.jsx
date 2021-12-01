import React from "react";
import { useHistory } from "react-router";
import Astro from "../images/astronauta.png";
import styleInicio from "./Inicio.module.css";

export function Inicio() {
  let history = useHistory();
  return (
    <div>
      <h1>
        EducaTe <br />
        Matematicas de 1er Grado
      </h1>
      {/* <pre>esto es una prueba
                erwe
            </pre> */}
      {/* <button className = {styleInicio.btt} onClick ={
                 ()=>{
                     history.push("/homepage");
                 }         
             }>
                Inicio sin Sesión
            </button> */}
      <div className={styleInicio.texto}>
        <img className={styleInicio.astronauta} src={Astro} alt="Astronauta" />

        <div className={styleInicio.texto2}>
          Cuando asumimos la enseñanza de la matemática con el compromiso de la
          participación de todos los alumnos en un entorno productivo, en la que
          se enseña con distintos procedimientos Esta página te ofrecerá videos
          de enseñanza didáctica que tienen como punto de partida diversos
          ejemplos para trabajar con el alumno. Además, accederá a recursos
          teóricos en relación con el juego y la enseñanza de la matemática que
          le ayudaran en la toma de decisiones didácticas <br />
          ¿Que aprenderás? <br />
          - Aprenderás habilidades analíticas esenciales
          <br />
          - Aprenderás como visualizar y representar los daos
          <br />- Comprenderás como organizar datos, y hacer cálculos
        </div>
      </div>
      <button
        className={styleInicio.btt}
        onClick={() => {
          history.push("/homepage");
        }}
      >
        Aprende
      </button>

      <button
        className={styleInicio.bttIni}
        onClick={() => {
          history.push("/Login");
        }}
      >
        Iniciar Sesión
      </button>      
    </div>
  );
}
