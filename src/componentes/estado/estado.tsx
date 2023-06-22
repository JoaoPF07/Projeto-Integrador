import { useState } from "react";

function Estado() {
  const [numero, setNumero] = useState(0);

  function handleClickMaior() {
    setNumero(numero + 10);
  }

  function handleClickMenor() {
    setNumero(numero - 10);
  }
  return (
    <div>
      <h1>O VALOR É: {numero}</h1>
      <br />
      <button onClick={handleClickMaior}> + </button>
      <br />
      <button onClick={handleClickMenor}> - </button>
    </div>
  );
}
export default Estado;
