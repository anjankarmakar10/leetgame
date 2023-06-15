import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedSrot, setSelectedSort] = useState(null);

  const value = {
    selectedGenre,
    setSelectedGenre,
    selectedPlatform,
    setSelectedPlatform,
    selectedSrot,
    setSelectedSort,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
