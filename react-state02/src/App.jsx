import React, { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(100);

  function diminuir() {
    setValor((valor_antigo) => valor_antigo - 1);
  }
  function aumentar() {
    setValor((valor_antigo) => valor_antigo + 1);
  }

  return (
    <>
      <h1>React Hooks - useState</h1>
      <button onClick={diminuir}>Diminuir</button>
      <span>{valor}</span>
      <button onClick={aumentar}>Aumentar</button>
    </>
  );
}
