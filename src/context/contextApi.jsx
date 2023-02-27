import { useContext, createContext, useState } from "react";
import { DummyData } from "../utils/DummyData";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchAnime, setSearchAnime] = useState("");
  const [toogle, setToogle] = useState(false);
  const [dark, setDark] = useState(localStorage.theme);
  const [selectedGenre, setSelectedGenre] = useState("Genres 1");
  const [login, setLogin] = useState(false);
  const [selectedGenreTwo, setSelectedGenreTwo] = useState("Genres 2");
  const [genres, setGenres] = useState("Award Winning");
  const [page, setPage] = useState(1);

  return (
    <StateContext.Provider value={{ dark, genres, selectedGenre, setSelectedGenre, setGenres, page, selectedGenreTwo, setSelectedGenreTwo, setPage, setDark, searchAnime, setSearchAnime, toogle, setToogle, login, setLogin }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
