import React from 'react'

const BeyondCode = () => {
    const hobbieList = [
        {id: "music", label: "Music"},
        {id: "coffee", label: "Coffee"},
        {id: "board-games", label: "Board Games"},
        {id: "movies", label: "Movies"},
        {id: "writing", label: "Writing"},
        {id: "reading", label: "Reading"},
        {id: "hiking", label: "Hiking"},
        {id: "cat", label: "Cat Lover"}
        
    ]
    
  return (
    <div className="col-start-2 row-start-2 flex flex-col gap-3 rounded-2xl border border-emerald-50 bg-gradient-to-r from-riptide-200 to-mint-200 p-8 dark:border-zinc-800 dark:border-2 dark:bg-zinc-800 dark:bg-gradient-radial dark:from-riptide-500 dark:to-mint-500 max-md:gap-0 max-xl:p-5 max-md:p-4 max-lg:gap-1 md:col-start-4">
      <div className="flex flex-col-reverse items-start gap-4 max-md:gap-2">
        <h3 className="font-extrabold text-4xl max-xl:text-3xl max-md:text-xl  dark:text-white text-blacktext">
          Beyond the Code
        </h3>
      </div>
      <div className="overflow-y-auto">
        <div className="max-w-7xl gap-3 py-4 max-md:py-3 flex-wrap mx-auto max-md:gap-2 max-sm:gap-1 justify-start items-center flex flex-row">
          {hobbieList.map((item) => (
            <span
              className="px-4 py-1 rounded-full text-sm font-medium text-zinc-500 dark:text-neutral-400 hover:text-blacktext bg-riptide-50 dark:bg-zinc-800 hover:bg-mint-200 cursor-default transition-all ease-in-out duration-300"
              key={item.id}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeyondCode