import React from "react";
import { TitleCard, AllTiles, PageLinks } from "./";

function Home() {
  return(
    <React.Fragment>
      <div className="h-screen">
        
        <TitleCard />
        <PageLinks />
        <AllTiles />
      </div>
    </React.Fragment>
  )
}

export default Home;