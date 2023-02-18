import { useContext, createContext, useState } from "react";
import { DummyData } from "../utils/DummyData";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchAnime, setSearchAnime] = useState("");
  const [toogle, setToogle] = useState(false);
  const [dark, setDark] = useState(localStorage.theme);
  const [login, setLogin] = useState(false);
  const [genres, setGenres] = useState("Award Winning");
  const [page, setPage] = useState(1);

  return <StateContext.Provider value={{ dark, genres, setGenres, page, setPage, setDark, searchAnime, setSearchAnime, toogle, setToogle, login, setLogin }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
