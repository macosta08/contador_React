import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); // retorna []
  //console.log(counter, setCounter);

  //sumAdd aumentar en uno
  const sumAdd = () => setCounter(counter + 1);
  //restAdd decrementar en uno
  const restAdd = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={sumAdd}>+1</button>
      <button onClick={() => setCounter(value)}>Reset</button>
      <button onClick={restAdd}>-1</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
