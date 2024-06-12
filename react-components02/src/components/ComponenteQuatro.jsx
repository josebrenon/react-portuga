import React from "react";
import ComponenteCinco from "./ComponenteCinco";

const ComponenteQuatro = (props) => {
  return (
    <div className="componente">
      <p>Título: {props.titulo}</p>
      {/* * Para poder colocar outro componente dentro do mesmo precisa usar o props.children lá no App.jsx
      {props.children} */}
      <ComponenteCinco texto="Propiedade do componente 1" />
      <ComponenteCinco texto="Propiedade do componente 2" />
      <ComponenteCinco />
      <ComponenteCinco texto="Propiedade do componente 4" />
    </div>
  );
};
export default ComponenteQuatro;
