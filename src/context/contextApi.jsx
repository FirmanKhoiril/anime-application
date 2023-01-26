import { useContext, createContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchAnime, setSearchAnime] = useState("");
  const [dark, setDark] = useState(false);
  const [login, setLogin] = useState(false);
  const [genres, setGenres] = useState("Award Winning");
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  return <StateContext.Provider value={{ dark, genres, setGenres, page, setPage, setDark, searchAnime, setSearchAnime, nextPage, login, setLogin, prevPage }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
