import React from "react";
import clientes from "../dados_clientes/dados_clientes";

export default function ComponenteSeis(props) {
  function cliente() {
    return clientes.map((cliente) => {
      return (
        <li key={cliente.id_cliente}>
          Nome: {cliente.nome} || Email: {cliente.email}
        </li>
      );
    });
  }

  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <ul>{cliente()}</ul>
    </div>
  );
}
