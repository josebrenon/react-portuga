import React from "react";

export default function ComponenteFilho(props) {
  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <p>
        Cargo: {props.cargo} - {props.children}
      </p>
    </div>
  );
}
