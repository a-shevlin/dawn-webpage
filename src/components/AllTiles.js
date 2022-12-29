import React from "react";
import PropTypes from "prop-types";
import { Tiles } from "./";
import { tiles } from "../data"; 


function AllTiles() {
  return(
    <React.Fragment>
      <div className='w-full h-full flex flex-col bg-zinc-200 dark:bg-slate-800 p-1'>
        <div className='text-zinc-500 font-mono mx-auto w-full tracking-narrow drop-shadow-lg font-bold p-0 text-center uppercase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>

          {Object.values(tiles).map((tile) =>(
            <Tiles
              img={tile.img}
              name={tile.name}
              builder={tile.builder}
              id={tile.id}
            />
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default AllTiles;