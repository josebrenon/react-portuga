import React from "react";
import ComponenteFilho from "./ComponenteFilho";

export default function ComponentePai(props) {
  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <p>Pai</p>
      <ComponenteFilho titulo="Componente Filho" cargo="Administrador">
        Brenon
      </ComponenteFilho>

      <ComponenteFilho titulo="Componente Filho" cargo="Gerente">
        Lucia
      </ComponenteFilho>

      <ComponenteFilho titulo="Componente Filho" cargo="Guarda">
        Francisco
      </ComponenteFilho>
    </div>
  );
}
