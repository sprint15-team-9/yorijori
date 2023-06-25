import { useRef, useEffect } from 'react';

interface IUseInterval {
  callback: () => void;
  delay: number;
}

const useInterval = ({ callback, delay }: IUseInterval) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
