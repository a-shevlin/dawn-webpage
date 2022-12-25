import React from "react";
import PropTypes from "prop-types";
import { Tiles } from "./";
import bg from '../assets/dawn-bg.png';

const data = [
  {
    id: 0,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 1,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 2,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 3,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 4,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 5,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 6,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 7,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 8,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  },
  {
    id: 9,
    name: 'tree',
    builder: 'everyone',
    img: bg,
  }
]

function AllTiles() {
  return(
    <React.Fragment>
      <div className='w-full h-full flex flex-col bg-zinc-200 dark:bg-zinc-750 p-1'>
        <div className='text-zinc-500 font-mono mx-auto w-full titleCardFade tracking-narrow drop-shadow-lg font-bold p-0 text-center uppercase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>

          {Object.values(data).map((tile) =>(
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