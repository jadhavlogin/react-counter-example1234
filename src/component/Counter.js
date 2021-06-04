import React, { useState } from 'react';

import './Counter.css';

function Counter() {
  const [count, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(count + 1);
  }

  function decrementCounter() {
    setCounter(count - 1);
  }

  return <div className="clockContainer" />;
}

export default Counter;
