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

export default function App() {
  return (
    <>
      <ComponenteNove titulo="Componente nove" />
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
