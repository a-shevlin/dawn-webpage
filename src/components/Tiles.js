import React from "react";
import PropTypes from "prop-types";


function Tiles(props) {
  return(
    <React.Fragment>
      <div className="w-full h-full mx-auto text-center p-1">
        <img className="object-cover w-full min-h-52 h-80" src={props.img}/>
      </div>
    </React.Fragment>
  )
}

export default Tiles;

Tiles.propTypes = {
  img: PropTypes.string,
  id: PropTypes.number
}