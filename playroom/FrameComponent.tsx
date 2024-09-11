import { useEffect } from 'react';
import '../src/styles/global.css';

interface FrameComponentProps {
  children: React.ReactNode;
}

const useBodyClass = (className: string) => {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
};

const FrameComponent: React.FC<FrameComponentProps> = ({ children }) => {
  useBodyClass('antialiased');
  return <>{children}</>;
};

export default FrameComponent;
