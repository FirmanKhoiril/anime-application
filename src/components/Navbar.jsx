import React from "react";

import { useStateContext } from "../context/contextApi";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { SearchBar } from "../components";

const Navbar = () => {
  const { toogle, setToogle } = useStateContext();

  return (
    <div className={`flex items-center sticky top-0 justify-between bg-white dark:bg-dark  drop-shadow-lg z-20 p-3`}>
      <div className="flex items-center space-x-4">
        <div className="p-2 dark:bg-white/10 bg-slate-300 rounded-full" onClick={() => setToogle((prev) => !prev)}>
          {!toogle ? <HiMenuAlt4 className="dark:text-white" /> : <HiX className="dark:text-white" />}
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
