import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { lightTheme, darkTheme } from './themes';

type Theme = typeof lightTheme | typeof darkTheme;

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps>({ theme: lightTheme });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    document.body.classList.remove(lightTheme.className, darkTheme.className);
    document.body.classList.add(theme.className);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
