import React from "react";
import "./App.css";
import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";

export default function App() {
  return (
    <>
      <ComponenteSeis titulo="Componente Seis" />
      <ComponenteQuatro titulo="Componente quatro" />
      <ComponenteTres titulo="Teste" subtitulo="Texto do componente Três" />
      <ComponenteUm />
      <ComponenteDois />
    </>
  );
}
