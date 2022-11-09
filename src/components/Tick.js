import React, { useState, useEffect } from 'react';

function Tick() {
  const [time, setTime] = useState(null)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div id="tick">
      <h1>Hello, world!</h1>
      <h2>It is {time}.</h2>
    </div>
  );
}

export default Tick;