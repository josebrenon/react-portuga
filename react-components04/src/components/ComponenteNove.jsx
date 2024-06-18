import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function ComponenteNove(props) {
  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <p>Nome: {props.valor}</p>
      <CondicaoIf condicao={props.valor === "Brenon"}>
        <p>Esse é o meu nome</p>
      </CondicaoIf>

      <CondicaoIf condicao={props.valor === "Lúcia"}>
        <p>É a minha mãe</p>
      </CondicaoIf>
      <CondicaoIf
        condicao={props.valor !== "Lúcia" && props.valor !== "Brenon"}
      >
        <p>Desconheço esse nome</p>
      </CondicaoIf>
    </div>
  );
}
