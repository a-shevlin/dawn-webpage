import React from "react";
import PropTypes from "prop-types";


function Tiles(props) {
  return(
    <React.Fragment>
      <div className="w-full h-full mx-auto text-center p-1 overflow-hidden relative cursor-pointer hover:brightness-75 dark:hover:brightness-125">
        <img className="object-cover w-full min-h-52 h-80 " src={props.img} alt={props.id}/>
        <div class="absolute w-full p-2.5 top-0 inset-x-0 text-slate-100 text-lg text-left select-none">
          <p className="font-light tracking-wide">
            {props.name}
          </p>
          <p className="text-sm font-thin">
            {props.builder}  
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Tiles;

Tiles.propTypes = {
  name: PropTypes.string,
  builder: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number
}