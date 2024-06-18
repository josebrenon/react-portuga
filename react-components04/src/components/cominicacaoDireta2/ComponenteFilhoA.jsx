import React from "react";

export default function ComponenteFilhoA(props) {
  return (
    <div className="componente">
      <p>
        Filho: {props.nome} {props.apelido}
      </p>
    </div>
  );
}
