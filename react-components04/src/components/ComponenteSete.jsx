import React from "react";

export default function ComponenteSete(props) {
  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      {props.valor ? (
        <div>
          <p>Análise do valor</p>
          <p>Verdadeiro</p>
        </div>
      ) : (
        <div>
          <p>Análise do valor</p>
          <p>Falso</p>
        </div>
      )}
    </div>
  );
}
