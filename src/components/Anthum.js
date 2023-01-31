import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


function Anthum(props) {
  return(
    <React.Fragment>
      <div className='w-full h-full text-center flex flex-col bg-zinc-200 dark:bg-gray-800 text-stone-600 dark:text-zinc-300 py-10'>
        <div className="w-4/5 lg:w-3/5 mx-auto space-y-6">
          <h1 className="text-5xl uppercase">Anthum</h1>
          <p className="text-lg">Dawn is a RP SMP Minecraft server. Players can switch between 2 worlds seamlessly allowing for a full custom Adventure on one and an original SMP experience on the other.</p>
          <iframe 
            className="aspect-vertical h-[33.3rem] mx-auto"
            src="https://v16m-webapp.tiktokcdn-us.com/c1451cdd8daf4cc1909005fe0caf82d3/63d92bc8/video/tos/useast2a/tos-useast2a-ve-0068c003/ooidmgJnjBsEmUBeDKc9hAQ0EBB3bufQDRoB9v/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3110&bt=1555&cs=0&ds=3&ft=4KLMeMzm8Zmo0zoTT64jVdf.dpWrKsdm&mime_type=video_mp4&qs=0&rc=ZDs5NjVoOjNkZ2Y2NWRkNkBpam01MzU6ZnV3aDMzNzczM0BfYjRgYzY1NS8xNmI1YjJgYSM1LmBhcjRvYnFgLS1kMTZzcw%3D%3D&l=20230131085436CAA523CBE4945503602B">
          </iframe>
          <div className="w-72 mx-auto uppercase text-xl px-2 py-2 rounded-md border-solid border-2 border-stone-600 dark:border-zinc-300 hover:text-red-400 hover:border-red-400 dark:hover:text-red-200 dark:hover:border-red-200">
            <a href="https://www.tiktok.com/@dawn.server">go to the dawn tiktok</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Anthum;