import React from "react";
import ComponenteFilha from "./ComponenteFilha";

export default function ComponenteMae(props) {
  function clicou() {
    console.log("Botão da filha foi clicado!");
  }

  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <ComponenteFilha titulo="Filha" click={clicou}></ComponenteFilha>
    </div>
  );
}
