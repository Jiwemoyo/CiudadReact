import React from "react";

export const Entry = () => {
  var nombre = "Alessandro"
  var apellido ="Cisneros"
  const horas = new Date().getHours()
  let tiempoActual = ""

switch (true) {
  case (horas < 12):
    tiempoActual = "Días";
    break;
  case (horas >= 12 && horas < 17):
    tiempoActual = "Tardes";
    break;
  case (horas < 21):
    tiempoActual = "Más tardes";
    break;
  default:
    tiempoActual = "Noches";
    break;
}

  return (
    <div className="EntryContainer">
      <img src="beathLoop.jpeg" alt="portadaJuego" />
      <div className="content">
        <div className="up-content">
          <div className="Genero">
            <img src="iconArcade.png" alt="iconoGenero" />
            <span>GENERO</span>
          </div>
          <button className="DonwloadButton">Descargar<i class="fas fa-download"></i></button>
        </div>

        <h3>Titulo</h3>
        <p>Peso de descarga: 3.2 GB</p>
        <p>
          Beat Loop es un juego indie hipnótico que combina ritmo, puzzles y una
          vibra cyberpunk única. Encarnas a DJ Nex, un prodigio de los
          sintetizadores atrapado en un bucle temporal, donde cada nivel es una
          mezcla entre desafíos de sincronía musical y rompecabezas ambientales.
        </p>
      </div>
    </div>
  );
};
