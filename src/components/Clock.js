import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(null)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="h-full flex justify-center items-center">
      <h2 className="text-slate-400 font-bold text-9xl drop-shadow-md">{time}</h2>
    </div>
  );
}

export default Clock;