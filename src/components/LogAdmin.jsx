import React from "react";
import { useHistory } from "react-router";
import "./login.css";
export function LogAdmin(){
    let history = useHistory();
    
    return (
        
        <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Administrador: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
            //   onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
            //   onChange={this.handleChange}
            />
            <br /> 
            <button className="btn btn-primary" onClick={()=> history.push("/homePage")}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
      );
}