import React, { useEffect } from 'react';
import { ThemeProvider } from '../src/ThemeContext';
import { lightTheme, darkTheme } from '../src/themes';
import '../src/styles/global.css';

interface FrameComponentProps {
  children: React.ReactNode;
  theme: typeof lightTheme | typeof darkTheme;
}

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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default FrameComponent;
