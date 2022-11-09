import React, { useState, useEffect } from 'react';

function Tick() {
  const [time, setTime] = useState(null)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div class="h-full flex justify-center items-center">
      <h2 class="text-slate-400 font-bold text-5xl">It is {time}.</h2>
    </div>
  );
}

export default Tick;