import { Container, TextField, MenuItem, Select, Box } from "@mui/material";
import React from "react";
import { DummyData } from "../utils/DummyData";
import { useStateContext } from "../context/contextApi";
import { useNavigate } from "react-router-dom";

const GenresSelected = () => {
  const { dark, selectedGenre, setSelectedGenreTwo, selectedGenreTwo, setSelectedGenre } = useStateContext();
  const navigate = useNavigate();

  const handleGenres = () => {
    navigate(`/genres/${selectedGenre}/${selectedGenreTwo}`);
  };
  return (
    <Container className="dark:text-white mt-4 rounded-xl dark:bg-desert pt-7 h-screen">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Select value={selectedGenre} sx={{ borderRadius: 4 }} onChange={(e) => setSelectedGenre(e.target.value)} label="Genres 1">
          <MenuItem value="Genres 1">
            <em>Genres 1</em>
          </MenuItem>
          {DummyData.map((genre, i) => (
            <MenuItem key={genre.name} value={genre.name || ""}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
        <Select value={selectedGenreTwo} sx={{ borderRadius: 4, mt: 4 }} onChange={(e) => setSelectedGenreTwo(e.target.value)} label="Genres 2">
          <MenuItem value="Genres 1">
            <em>Genres 2</em>
          </MenuItem>
          {DummyData.map((genre, i) => (
            <MenuItem key={genre.name} value={genre.name || ""}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>

        <button onClick={handleGenres} className="text-black h-10 w-40 bg-white/40 py-2 mt-4 font-bold rounded-lg tracking-wider shadow-xl hover:bg-white/20">
          Filter Now
        </button>
      </Box>
    </Container>
  );
};

export default GenresSelected;
