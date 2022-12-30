import React from 'react';
import { TitleCard, Home, PageLinks, About, Contact } from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <div className="h-screen bg-zinc-200 dark:bg-gray-800">
    <Router>
        <TitleCard />
        <PageLinks />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
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
