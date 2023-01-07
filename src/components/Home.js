import React from "react";
import PropTypes from "prop-types";
import { AllTiles } from "./";

function Home(props) {

  return(
    <React.Fragment>
      <div className="h-screen dark:bg-slate-800">
        <AllTiles 
          tileList = {props.tileList}
        />
      </div>
    </React.Fragment>
  )
}

export default Home;

Home.propTypes = {
  tileList : PropTypes.array,
}