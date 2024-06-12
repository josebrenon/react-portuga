/* eslint-disable import/no-anonymous-default-export */
import React from "react";

// export default (props) => (
//   <div className="componente">
//     <p>Título: {props.titulo}</p>
//   </div>
// );

const ComponenteTres = (props) => {
  return (
    <div className="componente">
      {/* <p>Título: {props.titulo}</p> */}
      <h1 className="titulo">Título: {props.titulo}</h1>
      <p>Subtítulo: {props.subtitulo}</p>
    </div>
  );
};
export default ComponenteTres;
