import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

//generally we use custom hook which is below

export default function useTheme(){
    return useContext(ThemeContext)
}