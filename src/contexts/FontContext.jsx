import { createContext, useState } from "react";

export const FontContext = createContext({
  currentFont: "",
  setCurrentFont: () => null,
});

export const FontProvider = ({ children }) => {
  const [currentFont, setCurrentFont] = useState("sans-serif");

  return (
    <FontContext.Provider
      value={{
        currentFont,
        setCurrentFont,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};
