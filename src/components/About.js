import React, { useEffect, useState } from "react";
import logo from "../assets/logo_tra.png";
import { emp } from '../data';


function About() {
  
  return(
    <React.Fragment>
      <div className="w-full mx-auto py-10 bg-stone-200 dark:bg-gray-800 dark:text-zinc-300 text-stone-800">
        <div className=" w-4/5 md:w-3/4 mx-auto">

          <img src={logo} alt="dawn servers logo" className="w-90 block mx-auto"/>
          <p className="text-center text-xl">Dawn consists of over 15 talented builders, designers, developers, writers, and event planners. We use our expertise to create enjoyable minecraft experiences and content with the intention of enspiring happiness for people who use or view our work.</p>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 w-5/6 uppercase">
            {Object.values(emp).map((tile) =>(
              <div className="flex w-[30rem] md:w-[30rem] m-auto whitespace-pre">
                {tile.id % 2 === 0 || tile.id === 0 ? 
                  <div className="w-full grid grid-cols-3 gap-1">
                    <img src={tile.img} alt={`${tile.name}`} className='w-36 h-28 m-auto inline-block text-wrap px-4 border-r-2 dark:border-slate-300'/>
                    <div className="text-left scale-x-90 col-span-2">
                      <p className="text-2xl py-1">{tile.mc}</p>
                      <p>{tile.name}</p>
                      <p className="text-sm whitespace-normal py-1">{tile.job}</p>
                    </div>
                  </div>
                :
                <div className="w-full grid grid-cols-3 gap-1">
                    <div className="text-right scale-x-90 col-span-2">
                      <p className="text-2xl py-1">{tile.mc}</p>
                      <p>{tile.name}</p>
                      <p className="text-sm whitespace-normal py-1">{tile.job}</p>
                    </div>
                    <img src={tile.img} alt={`${tile.name}`} className='w-36 h-28 m-auto inline-block text-wrap px-4 border-l-2 dark:border-slate-300'/>
                  </div>
                }
                
                
              </div>
            ))}
         </div>  
        </div>
      </div>
    </React.Fragment>
  )
}

export default About;
