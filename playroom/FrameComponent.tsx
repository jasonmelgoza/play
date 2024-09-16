import React, { useEffect } from 'react';
import { ThemeProvider } from '../src/ThemeContext';
import { lightTheme, darkTheme } from '../src/themes';
import { createGlobalStyle } from 'styled-components';
import '../src/styles/global.css';

interface FrameComponentProps {
  children: React.ReactNode;
  theme: typeof lightTheme | typeof darkTheme;
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

const useBodyClass = (className: string) => {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
};

const FrameComponent: React.FC<FrameComponentProps> = ({ children, theme }) => {
  useBodyClass('antialiased');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default FrameComponent;
