import React, { useState } from "react";

export default function App() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [media, setMedia] = useState(0);

  function calcMedia() {
    if (nota1 > 10 || nota1 < 0 || nota2 < 0 || nota2 > 10) {
      alert("[ERRO] As notas devem ser entre 0 e 10!!!!");
    } else {
      const soma = nota1 + nota2;
      const div = soma / 2;
      return setMedia(() => {
        return div;
      });
    }
  }

  return (
    <>
      <h1>Tirando a média</h1>
      <hr />
      <span>Nota 1:</span>{" "}
      <input
        type="number"
        value={nota1}
        onChange={(e) => {
          setNota1(parseFloat(e.target.value));
        }}
      />
      <br />
      <span>Nota 2:</span>{" "}
      <input
        type="number"
        value={nota2}
        onChange={(e) => {
          setNota2(parseFloat(e.target.value));
        }}
      />
      <br />
      <button onClick={calcMedia}>Calcular média</button>
      <p>Média: {media}</p>
    </>
  );
}
