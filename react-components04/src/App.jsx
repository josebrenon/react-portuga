import React from "react";
import "./App.css";
import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete";
import ComponenteOito from "./components/ComponenteOito";
import ComponenteNove from "./components/ComponenteNove";
import ComponenteDez from "./components/ComponenteDez";
import ComponentePai from "./components/comunicacao_direta/ComponentePai";
import ComponenteMae from "./components/comunicacao_indireta/ComponenteMae";
import ComponenteA from "./components/comunicacao_indireta2/ComponenteA";
import ComponenteAvoA from "./components/cominicacaoDireta2/ComponenteAvoA";

export default function App() {
  return (
    <>
      <ComponenteAvoA />

      <ComponenteA titulo="Comunicação Indireta 2" />

      <ComponenteMae titulo="Comunicação Indireta" />

      <ComponentePai titulo="Comunicação direta" />

      <ComponenteDez corTexto="#780000" />

      <ComponenteNove titulo="Componente nove" valor="Lúcia" />

      <ComponenteOito titulo="Componente Oito" valor="Brenon" />

      <ComponenteSete titulo="Componente Sete" valor={true} />

      <ComponenteSeis titulo="Componente Seis" />

      <ComponenteQuatro titulo="Componente quatro" />

      <ComponenteTres titulo="Teste" subtitulo="Texto do componente Três" />

      <ComponenteUm />

      <ComponenteDois />
    </>
  );
}
