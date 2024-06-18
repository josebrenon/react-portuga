import React from "react";
import ComponentePaiA from "./ComponentePaiA";

export default function ComponenteAvoA(props) {
  return (
    <div className="componente">
      <p>Avô</p>
      <ComponentePaiA nome="Brenon" apelido="Neo" />
    </div>
  );
}
