import React from "react";
import PropTypes from "prop-types";
import { Tiles } from "./";
import bg from '../assets/dawn-bg.png';


const data = [
  {
    id: 0,
    img: bg,
  },
  {
    id: 1,
    img: bg,
  },
  {
    id: 2,
    img: bg,
  },
  {
    id: 3,
    img: bg,
  },
  {
    id: 4,
    img: bg,
  },
  {
    id: 5,
    img: bg,
  },
  {
    id: 6,
    img: bg,
  },
  {
    id: 7,
    img: bg,
  },
  {
    id: 8,
    img: bg,
  },
  {
    id: 9,
    img: bg,
  }
]

function AllTiles() {
  return(
    <React.Fragment>
      <div className='w-full flex flex-col justify-center py-8 bg-zinc-200'>
        <div className='text-zinc-500 font-mono mx-auto w-full my-auto titleCardFade tracking-narrow drop-shadow-lg font-bold p-0 text-center uppercase justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

          {Object.values(data).map((tile) =>(
            <Tiles
              img={tile.img}
              id={tile.id}
            />
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default AllTiles;