import { Entry } from "./components/Entry";
import { NavbarEx2 } from "./components/NavbarEx2";
import "./Ex2.css";

export const Exercise2 = () => {
  return (
    <>
      <NavbarEx2 />
      <div className="ContenidoDAtos">
        <Entry />
        <Entry />
        <Entry />
      </div>
    </>
  );
};
