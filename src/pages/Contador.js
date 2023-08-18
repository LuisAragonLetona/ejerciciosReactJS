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
    <div>
      <p>Contador: {contador}</p>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
