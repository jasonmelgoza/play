import React from 'react';
import { IconName, iconMap } from './icon-definitions';

type IconProps = {
  size?: number;
  color?: string;
  absoluteStrokeWidth?: boolean;
  strokeWidth?: number;
  ariaHidden?: boolean;
};

export const IconComponent: React.FC<{ 
  name: IconName; 
} & IconProps> = ({
  name,
  size = 16,
  color = 'currentColor',
  absoluteStrokeWidth = false,
  strokeWidth = 2,
  ariaHidden = true,
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
    aria-hidden={ariaHidden}
  />;
};

export default IconComponent;
