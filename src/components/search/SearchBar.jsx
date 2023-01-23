import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const [searchAnime, setSearchAnime] = useState("");
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
      <Paper component="form" onSubmit={handleSubmit} sx={{ borderRadius: 20, pl: 2, boxShadow: "none", mr: "sm: 5" }} className="mr-2 lg:mr-24 drop-shadow-md md:hover:drop-shadow-lg">
        <input className="outline-none placeholder:text-sm md:w-[300px] w-[160px] sm:w-[250px] grow border-r-[2px]" value={searchAnime} placeholder="Search Anime" onChange={(e) => setSearchAnime(e.target.value)} />
        <IconButton type="submit" className="text-gray-800">
          <Search />
        </IconButton>
      </Paper>
    </Tooltip>
  );
};

export default SearchBar;
