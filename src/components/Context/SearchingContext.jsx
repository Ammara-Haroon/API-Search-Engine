import { createContext, useState } from "react";

export const SearchingContext = createContext(null);

const SearchingContextProvider = ({ children }) => {
  const [isLanding, setIsLanding] = useState(true);

  return (
    <SearchingContext.Provider value={{ isLanding, setIsLanding }}>
      {children}
    </SearchingContext.Provider>
  );
};

export default SearchingContextProvider;
