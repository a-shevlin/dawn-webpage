import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import dawnLogo from '../assets/logo_tra.png';

function TitleCard(props) {
  const [opacity, setOpacity] = useState(1);
  const [hidden, setHidden] = useState(false);
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const headerRef = React.createRef();

  // const location = useLocation()

  const onHover = () => {
    setHover(!hover)
  }

  const onLinkClick = () => {
    setClick(!click);
  }
  
  useEffect(() => {  

    // might need to change based on screen size
    
    window.onscroll =()=>{
      const headerHeight = window.innerHeight;
      const range = 450;
      const offset = headerHeight / 2;
      let calc = (1 - (window.scrollY - offset + range) / range).toFixed(2);
      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }
      
      setOpacity(calc);
      console.log(calc);

      
      const height = window.innerHeight / 3;
      if (window.scrollY > height + 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    
  }, []);
  
  const copyThing = () => {
    navigator.clipboard.writeText('mc.dawnserver.com');
    onLinkClick();

  }



  return (
    <div className={`w-full flex flex-col justify-center bg-cover sticky bg-[url(../assets/dawn-bg.png)] bg-no-repeat bg-center h-full justify-center select-none z-0`}>
      <div className={`text-red-100 font-mono fixed mx-auto w-full my-auto drop-shadow-lg font-bold p-0 text-center uppercase ${hidden && 'hidden'}`} style={{opacity: opacity}}>
        <img className="w-32 block mx-auto" src={dawnLogo} alt="dawn logo" />
        <h1 className={`text-8xl tracking-wide text-white -mt-4 scale-y-90`}>
          {
            window.location.pathname === "/" ? "DAWN" : window.location.pathname
          }
        </h1>
        <p className="text-2xl font-extralight tracking-wider">
          {
            window.location.pathname === "/" ? "we are designers for the dawn of your creation" : ''
          }     
        </p>
        <p 
          className="text-lg border-double border-4 border-white rounded-md w-fit mx-auto font-black p-1 mt-2 tracking-widest"
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