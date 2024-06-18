import React from "react";

export default function ComponenteB(props) {
  let valor1 = 0;

  function executar() {
    valor1 = Math.random();
    props.funcao("Valor: " + valor1, "Brenon");
  }

  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <button onClick={executar}>Executar</button>
      <p>{valor1}</p>
    </div>
  );
}
