import React from 'react';
import { TitleCard, Home, AllTiles } from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="h-screen bg-zinc-200">
      <Home/>
      {/* <div className="flex-1 w-full z-10 h-full">
        <Home />
      </div> */}
    </div>
  );
}

export default App;
