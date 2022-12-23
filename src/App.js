import React from 'react';
import { TitleCard, Home, PageLinks } from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <div className="h-screen bg-zinc-200 dark:bg-zinc-700">
    <Router>
        <TitleCard />
        <PageLinks />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route path='/about' element={<AboutUs />} /> */}
        </Routes>
        {/* <div className="flex-1 w-full z-10 h-full">
          <Home />
        </div> */}
    </Router>
      </div>
  );
}

export default App;
