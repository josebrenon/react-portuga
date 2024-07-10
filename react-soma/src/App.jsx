import React, { useState } from "react";

export default function App() {
  const [nUm, setNUm] = useState(0);
  const [nDois, setNDois] = useState(0);
  const [nTres, setNTres] = useState(0);
  const [nQuatro, setNQuatro] = useState(0);
  const [soma, setSoma] = useState(0);
  const [subtração, setSubtração] = useState(0);

  function somar() {
    if (isNaN(nUm) || isNaN(nDois)) return [];

    setSoma(() => {
      return `Resultado: ${nUm + nDois}`;
    });
    // soma.push(`${nUm} + ${nDois} = ${nUm + nDois}`);
    // return soma;
  }

  function subtrair() {
    if (isNaN(nTres) || isNaN(nQuatro)) return [];
    setSubtração(() => {
      return `Resultado: ${nTres - nQuatro}`;
    });
  }

  // function subtrair() {
  //   if (isNaN(nTres) || isNaN(nQuatro)) return [];
  //   const subtração = [];
  //   subtração.push(`${nTres} - ${nQuatro} = ${nTres - nQuatro}`);
  //   return subtração;
  // }

  return (
    <>
      <h1>Somando números</h1>
      <hr />
      <input
        type="number"
        value={nUm}
        onChange={(e) => {
          setNUm(parseInt(e.target.value));
        }}
      />
      {" + "}
      <input
        type="number"
        value={nDois}
        onChange={(e) => {
          setNDois(parseInt(e.target.value));
        }}
      />
      <button onClick={somar}>Somar</button>
      {soma === 0 ? <p>Resultado:</p> : <p>{soma}</p>}
      {/* {somar().map((item) => {
        return <p>{item}</p>;
      })} */}
      <hr />
      <h1>Subtraindo Números</h1>
      <hr />
      <input
        type="number"
        value={nTres}
        onChange={(e) => {
          setNTres(parseInt(e.target.value));
        }}
      />
      {" + "}
      <input
        type="number"
        value={nQuatro}
        onChange={(e) => {
          setNQuatro(parseInt(e.target.value));
        }}
      />
      <button onClick={subtrair}>Subtrair</button>
      {subtração === 0 ? <p>Resultado:</p> : <p>{subtração}</p>}
      {/*
      <input
        type="number"
        value={nTres}
        onChange={(e) => {
          setNTres(parseInt(e.target.value));
        }}
      />
      {" + "}
      <input
        type="number"
        value={nQuatro}
        onChange={(e) => {
          setNQuatro(parseInt(e.target.value));
        }}
      />
      {subtrair().map((item) => {
        return <p>{item}</p>;
      })} */}
    </>
  );
}
