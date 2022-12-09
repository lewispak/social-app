import { createContext,useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("chakra-ui-color-mode") || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", darkMode)
  },[darkMode])

  return(
    <DarkModeContextProvider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContextProvider>
  )
}