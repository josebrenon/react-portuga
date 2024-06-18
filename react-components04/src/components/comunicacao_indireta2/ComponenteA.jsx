import React from "react";
import ComponenteB from "./ComponenteB";

export default function ComponenteA(props) {
  function executar(valor1, valor2) {
    console.log(valor1);
    console.log(valor2);
  }

  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <ComponenteB titulo="Filho" funcao={executar} />
    </div>
  );
}
