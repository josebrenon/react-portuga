import React, { useState } from "react";

export default function App() {
  // const [nome, setNome] = useState(() => {
  //   return "Brenon";
  // });

  // function alterar() {
  //   setNome((a) => {
  //     return "Lúcia";
  //   });
  // }

  // const [player, setPlayer] = useState({
  //   name: "Brenon",
  //   score: 0,
  // });

  const [playerName, setPlayerName] = useState(() => {
    return "Brenon";
  });

  const [playerScore, setPlayerScore] = useState(() => {
    return 0;
  });

  function alterar() {
    // setPlayer((a) => {
    //   return {
    //     ...a,
    //     score: a.score + 1,
    //   };
    // });
    setPlayerScore((sa) => {
      return sa + 1;
    });
  }

  return (
    <>
      <h1>React Hooks - useState</h1>
      <hr />
      <h3>Nome: {playerName}</h3>
      <h3>Pontos: {playerScore}</h3>
      <button onClick={alterar}>Alterar pontuação</button>
      {/* <h3>Nome: {nome}</h3>
      <button onClick={alterar}>Alterar</button> */}
    </>
  );
}
