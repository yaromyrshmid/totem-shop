import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ColoredProduct } from 'domain/types';

export const useProductColor = (availableColors: Array<ColoredProduct>) => {
  const {
    query: { color: selectedColorSlug }
  } = useRouter();
  const [activeColor, setActiveColor] = useState<null | ColoredProduct>(null);

  useEffect(() => {
    if (selectedColorSlug) {
      const selectedColor = availableColors.find(({ slug }) => slug === selectedColorSlug);

      if (selectedColor) {
        setActiveColor(selectedColor);
      }
    } else {
      if (availableColors.length) {
        setActiveColor(availableColors[0]);
      }
    }
  }, [availableColors, selectedColorSlug]);

  return {
    activeColor
  };
};
