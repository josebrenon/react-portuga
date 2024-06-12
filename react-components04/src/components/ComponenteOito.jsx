import React from "react";

export default function ComponenteOito(props) {
  function condicao() {
    // if (props.valor >= 10) {
    //   return <p>O valor: {props.valor} é igual ou superior a 10</p>;
    // } else {
    //   return <p>O valor: {props.valor} é inferior a 10</p>;
    // }
    switch (props.valor) {
      case "Brenon":
        return <p>É o meu nome</p>;
        // eslint-disable-next-line no-unreachable
        break;
      case "Lúcia":
        return <p>É o nome da minha mãe</p>;
      default:
        return <p>Desconheço quem tenha esse nome</p>;
        // eslint-disable-next-line no-unreachable
        break;
    }
  }

  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      {condicao()}
    </div>
  );
}
