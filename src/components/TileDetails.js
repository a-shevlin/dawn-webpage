import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function TileDetails() {
  const location = useLocation();
  const tile = location.state.tile;
  console.log(tile);
  return (
    <React.Fragment>
      <div className="w-full mx-auto p-6 bg-zinc-200 dark:bg-gray-800 overflow-hidden relative dark:text-zinc-300">
        <div className="w-5/6 md:w-4/5 mx-auto uppercase">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto tracking-tight">
            <div>
              <h1 className="uppercase text-md text-left">Behind The Build</h1>
              <p className="text-3xl">{tile.title}</p>
            </div>
            <div className="text-left w-max uppercase ml-auto py-6">
              <div className="w-max ml-auto">
                <div>
                  <h2>TimeLine</h2>
                  <p className="font-bold">{tile.timeline}</p>
                </div>
                <div className="py-2">
                  <h2>Size</h2>
                  <p className="font-bold">{tile.size}</p>
                </div>
              </div>
              <h2 className="text-right">Share {tile.title}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto tracking-tight py-4">
            <img src={tile.img} className="" alt={tile.title}/>
          </div>
          {/* 3D Render Embed using iframe */}
          <div className="w-full">
            <iframe title={tile.title} className="w-full aspect-square md:aspect-video" allowFullScreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src={tile.embed}></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TileDetails;