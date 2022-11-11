import React from 'react';
import { Clock, TitleCard } from './components';


function App() {
  return (
    <div className="bg-base-panel bg-no-repeat bg-cover h-screen bg-fixed">
      <TitleCard />
      <div className="flex-1 w-full z-10 h-full">
        <Clock />

      </div>
    </div>
  );
}

export default App;
