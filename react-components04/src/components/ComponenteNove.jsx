import React from "react";

export default function ComponenteNove(props) {
  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
    </div>
  );
}
