import React from "react";
import PropTypes from "prop-types";


function Tiles(props) {
  return(
    <React.Fragment>
      <div className="w-full h-48 mx-auto text-center px-0.5 py-0.5">
        <img className="object-cover w-full h-full" src={props.img}/>
      </div>
    </React.Fragment>
  )
}

export default Tiles;

Tiles.propTypes = {
  img: PropTypes.string,
  id: PropTypes.number
}