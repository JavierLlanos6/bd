import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecRNB(){
  let history = useHistory();
    return (
    <main>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/resta" onClick ={
                 ()=>{
                     history.push("/resta");
                 }         
             }>
          Nivel Semilla 
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.semilla} to ="/LecRNB" onClick ={
                 ()=>{
                     history.push("/LecRNB");
                 }         
             }>
          Nivel Brote
        </Link>
        </li>

        <li>
        <Link className = {stylesDiv.sub} to ="/LecRNP" onClick ={
                 ()=>{
                     history.push("/LecRNP");
                 }         
             }>
          Nivel Planta
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecRNA" onClick ={
                 ()=>{
                     history.push("/LecRNA");
                 }         
             }>
            Nivel Árbol
        </Link>
        </li>
    </ul>
    <ul className={stylesDiv.LeccionGrid}>
        <li>
          
          <Link to = "/JuegoRestaB" onClick ={
                 ()=>{
                     history.push("/JuegoRestaB");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </li>


        <li>
          <Link to="/PRB" onClick={
            ()=>{
              history.push("/PRB");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>


        <li>
          <Link to="/NBRV1" onClick ={
                 ()=>{
                     history.push("/NBRV1");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </li>
      </ul>
      </main>
  );
}