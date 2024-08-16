import React, { ReactNode } from 'react';

interface FrameComponentProps {
  children: ReactNode;
}

const FrameComponent: React.FC<FrameComponentProps> = ({ children }) => {
  return <div className="foo">{children}</div>;
};

export default FrameComponent;
