import React, { useState, useEffect } from 'react';

function TitleCard() {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(1);

  useEffect(() => {      
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
      if (currentScrollHeight !== newScrollHeight){
        setCurrentScrollHeight(newScrollHeight);
      }
    }
  }, []);
  
  const opacity = Math.min(30 / currentScrollHeight, 1);
  console.log(opacity);


  return (
    <div className='h-full flex justify-center items-center bg-fixed' style={{opacity}}>
      <h1 className="fixed text-red-300" >Dawn</h1>
    </div>
  )
}

export default TitleCard;