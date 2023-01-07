import React, { useEffect, useState } from "react";
import logo from "../assets/logo_tra.png";
import { emp } from '../data';


function About() {
  
  return(
    <React.Fragment>
      <div className="w-full mx-auto p-10 bg-stone-200 dark:bg-slate-800 dark:text-zinc-300">
        <img src={logo} alt="image of dawn servers logo" className="w-90 block mx-auto"/>
        <p className="text-center text-xl">Dawn consists of over 15 talented builders, designers, developers, writers, and event planners. We use our expertise to create enjoyable minecraft experiences and content with the intention of enspiring happiness for people who use or view our work.</p>
        <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 py-5 uppercase">
          {Object.values(emp).map((tile) =>(
            <div className="flex w-[28rem] m-auto whitespace-pre">
              {tile.id % 2 === 0 || tile.id === 0 ? 
                <div className="w-full grid grid-cols-2 gap-1">
                  <img src={tile.img} alt={`image of ${tile.name}`} className='w-32 h-28 m-auto inline-block text-wrap px-4 border-r-2 dark:border-slate-300'/>
                  <div className="text-left scale-x-90">
                  <p className="text-2xl">{tile.mc}</p>
                  <p>{tile.name}</p>
                  <p className="text-sm">{tile.job}</p>
                  </div>
                </div>
              :
                <div className="w-full grid grid-cols-2 gap-1">
                  <div className="text-right scale-x-90">
                    <p className="text-2xl">{tile.mc}</p>
                    <p>{tile.name}</p>
                    <p className="text-sm">{tile.job}</p>
                  </div>
                  <img src={tile.img} alt={`image of ${tile.name}`} className='w-32 h-28 m-auto inline-block text-wrap px-4 border-l-2 dark:border-slate-300'/>
                </div>
              }
              
              
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default About;

{/* <Tiles
                img={tile.img}
                name={tile.name}
                mc={tile.builder}
                id={tile.id}
              /> */}