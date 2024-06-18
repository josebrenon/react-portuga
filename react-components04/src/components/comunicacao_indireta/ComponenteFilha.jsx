import React from "react";

export default function ComponenteFilha(props) {
  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <button onClick={props.click}>Clicar</button>
    </div>
  );
}
