import React from 'react';
import { useEffect } from 'react';
import '../src/styles/global.css';
import { ThemeProvider } from '../src/ThemeContext';

interface FrameComponentProps {
  children: React.ReactNode;
  theme: 'light' | 'dark';
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
