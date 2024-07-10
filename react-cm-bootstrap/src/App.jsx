import React from "react";

export default function App() {
  return (
    <>
      <h1>React - Adicionar o Bootstrap ao projeto</h1>
      <hr />
      <a href="#" className="btn btn-primary">
        Botão bootstrap
      </a>
      <button className="btn btn-primary" type="button">
        Button
      </button>
      <div className="alert alert-success" role="alert">
        Teste 01
      </div>
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Título</h5>
          <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
          <p className="card-text">Conteúdo</p>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="profile"
            />
            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">Some quick example text</p>
            </div>
          </div>

          <a
            href="https://pt.m.wikipedia.org/wiki/Ficheiro:React-icon.svg"
            className="card-link"
            target="blank"
          >
            Card link
          </a>
        </div>
      </div>
    </>
  );
}
