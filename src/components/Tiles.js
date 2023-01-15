import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"


function Tiles(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  return(
    <React.Fragment>
      <Link to={`/project/${props.title}`} state={{tile: props}}>      
        <div className="w-full h-full mx-auto text-center p-1 overflow-hidden relative" onMouseEnter={onHover} onMouseLeave={onHover}>
          <img className={`object-cover w-full min-h-52 h-80 ${hover && "brightness-50"} ${!hover && "brightness-75"} transition-all duration-100`} src={props.img} alt={props.id}/>
          <div className="absolute w-full h-full top-0 inset-x-0 text-3xl text-left text-slate-200 select-none cursor-pointer opacity-0 hover:opacity-100 hover:brightness-100 transition-all duration-200">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full block text-center">
                <p className="font-bold tracking-wide hover:brightness-100">
                  {props.title}
                </p>
                {/* <p className="text-lg semibold hover:brightness-100">
                  Built by: {props.builder}!
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default Tiles;

Tiles.propTypes = {
  title: PropTypes.string,
  builder: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  timeline: PropTypes.string,
  size: PropTypes.string,
  embed: PropTypes.string,
  id: PropTypes.number
}