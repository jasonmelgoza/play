import React from 'react';
import { Chrome, Github, ArrowRight, ArrowUp, ArrowDown, ArrowLeft, Mail, User, File } from 'lucide-react';

// Define the valid icon names directly
type IconName = 'chrome' | 'github' | 'arrowRight' | 'arrowUp' | 'arrowDown' | 'arrowLeft' | 'mail' | 'user' | 'file';

// Define a type for the common props
type IconProps = {
  size?: number;
  color?: string;
  absoluteStrokeWidth?: boolean;
  strokeWidth?: number;
};

// Map icon names to their respective components
const iconMap: Record<IconName, React.ComponentType<IconProps>> = {
  chrome: Chrome,
  github: Github,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  mail: Mail,
  user: User,
  file: File,
};

export const IconComponent: React.FC<{ 
  name: IconName; 
  size?: number; 
  color?: string; 
  absoluteStrokeWidth?: boolean;
  strokeWidth?: number;
}> = ({
  name,
  size = 16,
  color = 'currentColor',
  absoluteStrokeWidth = false,
  strokeWidth = 2,
}) => {
  const IconNode = iconMap[name];

  if (!IconNode) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <IconNode 
    size={size} 
    color={color} 
    absoluteStrokeWidth={absoluteStrokeWidth} 
    strokeWidth={strokeWidth}
  />;
};

// Export the IconComponent
export default IconComponent;
