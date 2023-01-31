import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import dawnLogo from '../assets/logo_tra.png';

function TitleCard(props) {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const headerRef = React.createRef();

  const [opacity, setOpacity] = useState(1);
  const [hidden, setHidden] = useState(false);

  // const location = useLocation()

  useEffect(() => {  
    // console.log(window.scrollY + " window scroll Y")
    
    // might need to change based on screen size
    window.onscroll =()=>{
      console.log('test scroll')
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
      console.log(calc + " calc");

      
      const height = window.innerHeight / 3;
      if (window.scrollY > height + 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    
  }, []);


  const onHover = () => {
    setHover(!hover)
  }

  const onLinkClick = () => {
    setClick(!click);
  }
  
  
  
  const copyThing = () => {
    navigator.clipboard.writeText('mc.dawnserver.com');
    onLinkClick();

  }



  return (
    <React.Fragment>
      <div className={`w-full flex flex-col justify-center bg-cover bg-[url(../assets/dawn-bg.png)] bg-no-repeat bg-center h-full z-0`}>
        <div className='w-2/3 flex justify-center items-center m-auto h-full'>

          <div className={`text-red-100 font-mono mx-auto my-auto drop-shadow-lg font-bold p-0 text-center uppercase ${hidden && 'hidden'}`} style={{opacity: opacity}}>
            <img className="w-32 block mx-auto" src={dawnLogo} alt="dawn logo" />
            <h1 className={`text-8xl tracking-wide text-white -mt-4 scale-y-90`}>
              {
                window.location.pathname === "/" ? "DAWN" : window.location.pathname.substring(1,window.location.pathname.length)
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
      </div>
    </React.Fragment>
  )
}

export default TitleCard;

TitleCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number
}