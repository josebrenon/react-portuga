import React from "react";

export default function User({ usuario }) {
  return (
    <>
      <div className="user-container">
        Nome:{" "}
        <strong>
          {usuario.firstName} {usuario.lastName}
        </strong>
        <br />
        Idade: <strong>{usuario.age}</strong>
        <br />
        Sexo: <strong>{usuario.gender}</strong>
        <br />
        Email: <strong>{usuario.email}</strong>
      </div>
    </>
  );
}
