import { useState } from 'react';

export const useLinkSwipe = (onClick: () => void) => {
  const [mouseDownTime, setMouseDownTime] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setMouseDownTime(Date.now());
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof mouseDownTime === 'number' && Date.now() - mouseDownTime < 100) {
      onClick();
    } else {
      e.preventDefault();
    }
  };

  return {
    handleMouseDown,
    handleClick
  };
};
