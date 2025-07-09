import React from "react";

export const Entry = (props) => {


  return (
    <div className="EntryContainer">
      <img src={props.img} alt="portadaJuego" />
      <div className="content">
        <div className="up-content">
          <div className="Genero">
            <img src="iconArcade.png" alt="iconoGenero" />
            <span>{props.genero}</span>
          </div>
          <button className="DonwloadButton">Descargar<i class="fas fa-download"></i></button>
        </div>

        <h3>{props.titulo}</h3>
        <p>Peso de descarga: {props.peso}</p>
        <p>
          {props.psinopsis}
        </p>
      </div>
    </div>
  );
};
