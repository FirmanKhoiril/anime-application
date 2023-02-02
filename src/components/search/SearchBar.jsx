import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useDebounce } from "use-debounce";
import { useStateContext } from "../../context/contextApi";

const SearchBar = () => {
  const { searchAnime, setSearchAnime } = useStateContext();
  const navigate = useNavigate();
  const [debounceValue] = useDebounce(searchAnime, 500);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (debounceValue) {
      navigate(`/search/${debounceValue}`);
      setSearchAnime("");
    }
  };
  useEffect(() => {
    if (debounceValue) setSearchAnime(debounceValue);
  }, [debounceValue]);

  return (
    <Tooltip title="Search Anime or Genres" position="bottom">
      <form onSubmit={handleSubmit} className="mr-0 justify-center -z-10 lg:mr-24 inline-flex drop-shadow-md bg-white/60 dark:bg-white/10 hover:bg-white/90 rounded-full md:hover:drop-shadow-lg">
        <input
          className="outline-none  dark:bg-white/10 placeholder:text-sm bg-white/60 md:p-2 pl-[7px] hover:bg-white/90 focus:border-[0.1px] focus:border-black/60 dark:focus:border-white dark:text-white tracking-wider rounded-l-full border-r border-black/10 dark:border-white/20 placeholder:text-black dark:font-medium dark:placeholder:text-slate-50"
          value={searchAnime}
          placeholder="Search Anime..."
          onChange={(e) => setSearchAnime(e.target.value)}
        />
        <IconButton type="submit" onClick={handleSubmit} className="text-gray-800  dark:text-white">
          <Search />
        </IconButton>
      </form>
    </Tooltip>
  );
};

export default SearchBar;
