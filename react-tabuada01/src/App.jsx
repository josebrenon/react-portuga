import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [num, setNum] = useState(1);

  function multiplicar() {
    if (isNaN(num)) return [];
    let produtos = [];
    for (let m = 1; m <= 10; m++) {
      produtos.push(`${num} x ${m} = ${num * m}`);
    }
    return produtos;
  }

  return (
    <>
      <h1>React - Tabuada</h1>
      <hr />
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(parseInt(e.target.value));
        }}
        placeholder="Digite um número"
      />
      {multiplicar().map((item) => {
        return <p key={uuid()}>{item}</p>;
      })}
    </>
  );
}
