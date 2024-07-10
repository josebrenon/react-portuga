// eslint-disable-next-line no-unused-vars
import React, { useId } from "react";

export default function App() {
  const id = useId();
  const id2 = useId();
  return (
    <>
      <h1>React - useId</h1>
      <hr />
      <form action="#" method="post">
        <div>
          <input type="checkbox" name="check_masculino" id={id} />
          <label htmlFor={id}>Texto da checkbox</label>
        </div>
        <div>
          <input type="checkbox" name="check_masculino" id={id2} />
          <label htmlFor={id2}>Texto da checkbox</label>
        </div>
      </form>
    </>
  );
}
