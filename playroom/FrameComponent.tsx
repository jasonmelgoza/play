import React, { ReactNode } from 'react';
import '../src/styles/main.css';

interface FrameComponentProps {
  children: ReactNode;
}

const FrameComponent: React.FC<FrameComponentProps> = ({ children }) => {
  return <div className="foo">{children}</div>;
};

export default FrameComponent;
