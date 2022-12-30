import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { pages }from "../data";

function PageLinks() {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      (window.innerWidth < 950) ? setWidth(true) : setWidth(false);
    }
  }, []);
  return(
    <React.Fragment>
      <nav className="bg-zinc-200 dark:bg-gray-800 text-center flex flex-wrap space-x-3 w-full justify-center pt-5 pb-4 z-50">
    { !width ?
      <div>

        {Object.values(pages).map((page) => (
          <div className="inline-block lg:blocks p-2 px-5 text-zinc-600 hover:text-red-500 hover:drop-shadow-md dark:text-zinc-100 dark:hover:text-red-200 hover:cursor-pointer uppercase scale-y-90 tracking-wide font-thin text-xl hover:dark:bg-gray-700 hover:bg-zinc-300 rounded-lg">
            <Link to={`${page.link}`} >
              {page.name}
            </Link> 
          </div>
        ))} 
      </div>
    : 
      <div>
        <button className="text-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-6 dark:text-zinc-200 stroke-current rounded-lg dark:ahover:bg-gray-700">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div>
        {Object.values(pages).map((page) => (
          <div className="text-left lg:blocks px-5 text-zinc-600 hover:text-red-400 rounded hover:drop-shadow-md dark:text-zinc-100 dark:hover:text-red-200 hover:cursor-pointer uppercase scale-y-90 tracking-wide font-thin text-xl hover:dark:bg-gray-700 hover:bg-zinc-300">
            {/* <Link to={`/${page.name}`}> */}

              {page.name}
            {/* </Link> */}
          </div>
        ))}
        </div>
      </div>
      }
    </nav>
  </React.Fragment>
  )
}

export default PageLinks;

