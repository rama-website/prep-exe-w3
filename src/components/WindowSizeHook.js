import { useState, useEffect, useDebugValue } from 'react';

const useWindowSize = (minWidth, maxWidth) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isWithinSizeRange = (width) => width >= minWidth && width <= maxWidth;

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useDebugValue(isWithinSizeRange(windowSize.width) ? 'Within Range' : 'Out of Range');

  return isWithinSizeRange(windowSize.width);
};

export default useWindowSize;
