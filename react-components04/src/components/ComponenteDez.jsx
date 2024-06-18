import React from "react";

const ComponenteDez = (props) => {
  //   const estilo = {
  //     color: "#780000",
  //     padding: "10px",
  //     backgroundColor: "yellow",
  //   };

  return (
    <div className="componente">
      <h1 className="titulo">Título: {props.titulo}</h1>
      <p style={{ color: props.corTexto }}>Texto do parágrafo</p>
    </div>
  );
};
export default ComponenteDez;
