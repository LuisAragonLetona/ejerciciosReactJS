import React, { useState } from 'react';

const Contador = () => {
  const [contador, setcontador] = useState(0);

  const incrementar = () => {
    setcontador(contador + 1);
  }

  const decrementar = () => {
    setcontador(contador - 1);
  }

  return (
    <div className="container mb-3 mt-3">
      <p>Contador: {contador}</p>
      <button className="btn btn-danger  me-2" onClick={decrementar}>Decrementar</button>
      <button className="btn btn-success" onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
