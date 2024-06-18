import React, { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(0);

  function incremento() {
    return setValor(valor + 1);
  }
  function decremento() {
    return setValor(valor - 1);
  }
  return (
    <>
      <h1>React hooks</h1>
      <h3>Valor = {valor}</h3>
      <button onClick={decremento}>Decremento</button>
      <button onClick={incremento}>Incremento</button>
    </>
  );
}
