import React from "react";
import { Link } from 'react-router-dom';

const data = [
  {
    name: "home",
    id: 1,
  },
  {
    name: "about us",
    id: 2
  },
  {
    name: "services",
    id: 3
  },
  {
    name: "news",
    id: 4
  },
  {
    name: "discord",
    id: 5
  },
  {
    name: "store",
    id: 6
  },
  {
    name: "marketplace",
    id: 7
  },
]

function PageLinks() {
  return(
    <nav className="bg-zinc-200 text-center flex flex-wrap space-x-3 w-full justify-center pt-8">
      

      {
        Object.values(data).map((page) => (
          <div className="inline-block px-5 text-slate-600 uppercase font-thin text-xl">
            {/* <Link to={`/${page.name}`}> */}

              {page.name}
            {/* </Link> */}
          </div>
        ))
      }
    </nav>
  )
}

export default PageLinks;