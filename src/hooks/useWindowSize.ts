import { useState, useEffect } from 'react';

interface IWindowSizeReturn {
  width: number;
  height: number;
  isMatchWith: boolean;
}

interface IWindowSizeParams {
  matchWith?: number;
}

export const useWindowSize = ({ matchWith = -1 }: IWindowSizeParams = {}): IWindowSizeReturn => {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState<IWindowSizeReturn>(() => ({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
    isMatchWith: false,
  }));

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
        isMatchWith: isClient ? window.matchMedia(`(max-width: ${matchWith}px)`).matches : false,
      });
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isClient, matchWith]);

  return windowSize;
};
