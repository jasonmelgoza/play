import React, { ReactNode, useEffect } from 'react';
import '../src/styles/main.css';

interface FrameComponentProps {
  children: ReactNode;
}

const FrameComponent: React.FC<FrameComponentProps> = ({ children }) => {
  useEffect(() => {
    const className = 'antialiased';
    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, []);

  return <>{children}</>;
};

export default FrameComponent;
