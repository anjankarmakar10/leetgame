import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const value = {
    selectedGenre,
    setSelectedGenre,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
