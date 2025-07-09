import { Entry } from "./components/Entry";
import { NavbarEx2 } from "./components/NavbarEx2";
import "./Ex2.css";

export const Exercise2 = () => {
  return (
    <>
      <NavbarEx2 />
      <div className="ContenidoDAtos">
        <Entry img="beathLoop.jpeg" genero="Accion" titulo="Beat Loop +" peso="52 GB" psinopsis="Es un juego bien divetido y musical" />
        <Entry img="Fresh.jpeg" genero="Terror" titulo="Fresh" peso="100 GB" psinopsis="Gestion de recursos y terror psicologico" />
        <Entry img="Alien.jpeg" genero="puzzles" titulo="Alien Scapes" peso="40 GB" psinopsis="Escapa de tu pricion cubica" />
        <Entry img="Anny.jpeg" genero="Arcade" titulo="Annys JUly 12" peso="300 GB" psinopsis="Conquista los cielos con 3 amigos y derrota a los rivales" />
      </div>
    </>
  );
};
