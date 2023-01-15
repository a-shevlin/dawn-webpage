import React, { useState, useEffect } from 'react';
import { TitleCard, Home, PageLinks, About, Contact, TileDetails } from './components';
import { collection, addDoc, onSnapshot, setDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import  { db } from './firebase';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [tileList, setTileList] = useState([]);

 

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "tile"),
      (collectionSnapshot) => {
        const dbTiles = [];
        collectionSnapshot.forEach((doc) => {
          dbTiles.push({
            img: doc.data().img,
            id: doc.data().id,
            builder: doc.data().builder,
            title: doc.data().title,
            desc: doc.data().desc,
            timeline: doc.data().timeline,
            size: doc.data().size,
            embed: doc.data().embed,
          });
        });
        setTileList(dbTiles);
      },
    );
    return () => unSubscribe();
  }, []);


  return (
    <div className="h-screen w-full sm bg-zinc-200 dark:bg-slate-800">
      <Router>
          <TitleCard />
          <PageLinks />
          <Routes>
            <Route exact path='/' 
              element={<Home
                tileList={tileList} />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/project/:id' element={<TileDetails tileList={tileList}/>} />
          </Routes>
          {/* <div className="flex-1 w-full z-10 h-full">
            <Home />
          </div> */}
      </Router>
    </div>
  );
}

export default App;
