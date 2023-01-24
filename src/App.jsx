import React, { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, AnimeDetails, SearchAnime } from "./components/index";
import { Home } from "./pages";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { Tooltip } from "@mui/material";

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <BrowserRouter>
        <Box className="bg-white dark:bg-[#20232A]">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <Tooltip title="Theme Mode" position="Top">
              <button onClick={() => setDark(!dark)} className="text-2xl bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-500  p-3 hover:drop-shadow-xl hover:bg-slate-700/60 text-white rounded-full">
                {!dark ? <MdDarkMode className="text-orange-500" /> : <BsFillSunFill className="text-yellow-400" />}
              </button>
            </Tooltip>
          </div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<AnimeDetails />} />
            <Route path="/search/:searchAnime" element={<SearchAnime />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
