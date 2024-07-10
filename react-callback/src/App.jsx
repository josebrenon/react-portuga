import React, { useCallback, useState } from "react";
import "./style.css";
import Lista from "./Lista";
export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [numero, setNumero] = useState(100);

  const resultados = useCallback(() => {
    return [numero * 2, numero * 3, numero * 4];
  }, [numero]);

  const tema = {
    backgroundColor: temaEscuro ? "black" : "white",
    color: temaEscuro ? "white" : "black",
    height: "100vh",
  };

  return (
    <div style={tema}>
      <h1>React - useCallback</h1>
      <hr />
      <button onClick={() => setTemaEscuro((oldTemaEscuto) => !oldTemaEscuto)}>
        Alterar tema
      </button>
      <p>Número: {numero}</p>
      <button onClick={() => setNumero((oldNumero) => oldNumero + 1)}>
        Incrementar
      </button>
      <hr />
      <Lista resultados={resultados} />
    </div>
  );
}
