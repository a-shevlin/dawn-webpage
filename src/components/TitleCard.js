import React, { useState, useEffect, useRef } from 'react';
import dawnLogo from '../assets/logo_tra.png';

function TitleCard() {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(1);
  const [show, setShow] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  const onLinkClick = () => {
    setClick(!click);
  }
  
  useEffect(() => {  
    window.onscroll =()=>{
      console.log(window.scrollY);
      // might need to change based on screen size
      if (window.scrollY > 90){
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }, []);
  
  const copyThing = () => {
    navigator.clipboard.writeText('mc.dawnserver.com');
    onLinkClick();

  }

  const textAreaRef = useRef(null);




  return (
    <div className='w-full flex flex-col justify-center bg-cover sticky bg-base-panel bg-no-repeat bg-center h-full justify-center'>
      <div className={`text-red-100 font-mono fixed mx-auto w-full my-auto titleCardFade drop-shadow-lg font-bold p-0 text-center uppercase  ${!show && 'opacity-0'}`}>
        <img className="w-32 block mx-auto" src={dawnLogo} alt="dawn logo" />
        <h1 className="text-8xl tracking-wide text-white -mt-4 scale-y-90">DAWN</h1>
        <p className="text-2xl tracking-wider">we are designers for the dawn of your creation</p>
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