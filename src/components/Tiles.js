import React from "react";
import PropTypes from "prop-types";


function Tiles(props) {
  return(
    <React.Fragment>
      <div>
        {/* <img src={props.img}/> */}
        <p>{props.id}</p>
      </div>
    </React.Fragment>
  )
}

export default Tiles;

Tiles.propTypes = {
  img: PropTypes.string,
  id: PropTypes.number
}