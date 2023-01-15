import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tiles } from "./";


function AllTiles(props) {
  return(
    <React.Fragment>
      <div className='w-full h-full flex flex-col bg-zinc-200 dark:bg-gray-800 p-1'>
        <div className='text-zinc-500 font-mono mx-auto w-full tracking-narrow drop-shadow-lg font-bold p-0 text-center uppercase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>

          {Object.values(props.tileList).map((tile) =>(
            <Tiles
              img={tile.img}
              title={tile.title}
              builder={tile.builder}
              desc={tile.desc}
              id={tile.id}
              size={tile.size}
              timeline={tile.timeline}
              embed={tile.embed}
              key={tile.id}
            />
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default AllTiles;

AllTiles.propTypes = {
  tileList: PropTypes.array,
}