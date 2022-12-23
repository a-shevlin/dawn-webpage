import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import dawnLogo from '../assets/logo_tra.png';
import { pages } from '../data'

function TitleCard(props) {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(1);
  const [show, setShow] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  // const location = useLocation()

  const onHover = () => {
    setHover(!hover)
  }

  const onLinkClick = () => {
    setClick(!click);
  }
  
  useEffect(() => {  

    window.onscroll =()=>{
      // console.log(window.scrollY);
      // might need to change based on screen size
      if (window.scrollY > 90){
        setShow(false);
        setHover(false);
      } else {
        setShow(true);
      }
    }
  }, []);
  
  const copyThing = () => {
    navigator.clipboard.writeText('mc.dawnserver.com');
    onLinkClick();

  }



  return (
    <div className={`w-full flex flex-col justify-center bg-cover sticky bg-[url(../assets/dawn-bg.png)] bg-no-repeat bg-center h-full justify-center select-none z-0`}>
      <div className={`text-red-100 font-mono fixed mx-auto w-full my-auto titleCardFade drop-shadow-lg font-bold p-0 text-center uppercase  ${!show && 'opacity-0'}`}>
        <img className="w-32 block mx-auto" src={dawnLogo} alt="dawn logo" />
        <h1 className={`text-8xl tracking-wide text-white -mt-4 scale-y-90 ${!show && '-z-20'}`}>
          {
            window.location.pathname === "/" ? "DAWN" : window.location.pathname
          }
        </h1>
        <p className="text-2xl tracking-wider">
          {
            window.location.pathname === "/" ? "we are designers for the dawn of your creation" : ''
          }     
        </p>
        <p 
          className="text-lg border-double border-4 border-white rounded-md w-fit mx-auto p-1 mt-2 tracking-wider"
          onClick={() =>  copyThing()}
          style={{cursor: "pointer"}}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          
          >
            mc.dawnserver.com
        </p>
        {
          click && hover ? "copied!" : hover ? "click to copy!":  
          ""  
        } 
      </div>
    </div>
  )
}

export default TitleCard;

TitleCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number,
}