import React from 'react'

export const Entry = () => {
    return (
        <div className='EntryContainer'>
            <img src="beathLoop.jpeg" alt="portadaJuego" />
            <div className='content'>
                <div className='up-content'>
                    <img src="iconArcade.png" alt="iconoGenero" />
                    <span>GENERO</span>
                    <button>Descargar</button>
                </div>
                
                <h3>Titulo</h3>
                <p>Peso de descarga: 3.2 GB</p>
                <p>
                    Beat Loop es un juego indie hipnótico que combina ritmo, puzzles y una vibra cyberpunk única. Encarnas a DJ Nex, un prodigio de los sintetizadores atrapado en un bucle temporal, donde cada nivel es una mezcla entre desafíos de sincronía musical y rompecabezas ambientales.
                </p>

            </div>
        </div>
    )
}
