import React, { useState, useEffect } from 'react';
import dawnLogo from '../assets/logo_tra.png';

function TitleCard() {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(1);
  const [show, setShow] = useState(true);
  
  useEffect(() => {      
    window.onscroll =()=>{
      console.log(window.scrollY);
      // might need to change based on screen size
      if (window.scrollY > 70){
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }, []);
  


  return (
    <div className='w-full flex flex-col justify-center bg-fixed sticky bg-base-panel bg-no-repeat bg-cover h-2/5'>
      <div className={`text-red-100 font-mono fixed mx-auto w-full my-auto titleCardFade tracking-narrow drop-shadow-lg font-bold p-0 text-center uppercase justify-center ${!show && 'opacity-0'}`}>
        <img className="w-36 block mx-auto my-0" src={dawnLogo} alt="dawn logo" />
        <h1 className="text-8xl text-white mt-0">DAWN</h1>
        <p className="text-2xl">we are designers for the dawn of your creation</p>
        <p className="text-xl border-double border-4 border-white rounded-md w-fit mx-auto p-1">mc.dawnserver.com</p>
      </div>
    </div>
  )
}

export default TitleCard;