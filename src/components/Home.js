import React from "react";
import { AllTiles } from "./";

function Home() {
  return(
    <React.Fragment>
      <div className="h-screen dark:bg-slate-800">
        <AllTiles />
      </div>
    </React.Fragment>
  )
}

export default Home;