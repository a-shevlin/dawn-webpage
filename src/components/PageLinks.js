import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { pages }from "../data";

function PageLinks() {
  const [width, setWidth] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      (window.innerWidth < 1000) ? setWidth(true) : setWidth(false);
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
      <div className="w-2/3">
        <button className="text-right" onClick={() => setNavOpen(!navOpen)} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-24 h-16 dark:text-zinc-200 stroke-current rounded-lg ">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div>
        {Object.values(pages).map((page) => (
          <div className={"text-center lg:blocks text-zinc-600 hover:text-red-400 rounded hover:drop-shadow-md dark:text-zinc-100 dark:hover:text-red-200 hover:cursor-pointer uppercase scale-y-90 tracking-wide font-thin text-2xl" + (navOpen ? " h-12 " : " h-0 ") + " transition-all delay-150 duration-300 overflow-hidden "} >
            {page.id%2 === 0 ?
              <li className="w-full py-[0.5rem] px-4 bg-[#e2d8d8] hover:bg-[#dccaca] dark:bg-[#19212c] hover:dark:bg-[#1f2734] rounded-lg list-none">
                <Link to={`/${page.name}`}>
                  {page.name}
                </Link>
              </li>
            :
              <li className="w-full py-[0.5rem] px-4 hover:dark:bg-[#293343] hover:bg-[#eee2e2] rounded-lg list-none">
                <Link to={`/${page.name}`} className="">
                  {page.name}
                </Link>
              </li>
            }
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

