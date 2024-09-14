import React from 'react';
import { Chrome, Github, ArrowRight, ArrowUp, ArrowDown, ArrowLeft, Mail, User } from 'lucide-react';

// Define the valid icon names directly
type IconName = 'chrome' | 'github' | 'arrowRight' | 'arrowUp' | 'arrowDown' | 'arrowLeft' | 'mail' | 'user';

// Define a type for the common props
type IconProps = {
  size?: number;
  color?: string;
  absoluteStrokeWidth?: boolean;
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
};

export const IconComponent: React.FC<{ name: IconName; size?: number; color?: string, absoluteStrokeWidth?: boolean }> = ({
  name,
  size = 16,
  color = 'currentColor',
  absoluteStrokeWidth = false,
}) => {
  const IconNode = iconMap[name];

  if (!IconNode) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <IconNode size={size} color={color} absoluteStrokeWidth={absoluteStrokeWidth} />;
};

// Export the IconComponent
export default IconComponent;
