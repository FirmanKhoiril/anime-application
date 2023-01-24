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
      <form onSubmit={handleSubmit} className="mr-2 lg:mr-24 drop-shadow-md bg-white/60 dark:bg-white/10 hover:bg-white/90 rounded-full md:hover:drop-shadow-lg">
        <input
          className="outline-none p-2 dark:bg-white/10 placeholder:text-sm bg-white/60 hover:bg-white/90 focus:border focus:border-black/60 dark:focus:border-white rounded-l-full grow border-r"
          value={searchAnime}
          placeholder="Search Anime"
          onChange={(e) => setSearchAnime(e.target.value)}
        />
        <IconButton type="submit" onClick={handleSubmit} className="text-gray-800 hover:text-slate-800 dark:hover:text-white">
          <Search />
        </IconButton>
      </form>
    </Tooltip>
  );
};

export default SearchBar;
