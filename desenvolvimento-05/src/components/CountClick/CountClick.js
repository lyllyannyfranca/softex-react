import React, { useState } from 'react';

export default function CountClick() {
  // Declare uma variável de estado chamada "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}