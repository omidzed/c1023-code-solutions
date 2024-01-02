import { useState, useEffect } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type StopWatchFunctions = {
  start(): void;
  stop(): void;
  reset(): void;
  elapsed: number;
  isRunning: boolean;
};

export function StopWatch() {
  const stopWatch = useStopWatch();
  const [icon, setIcon] = useState(faPlay);

  function useStopWatch(): StopWatchFunctions {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
      let interval: string | number | NodeJS.Timeout | undefined;
      if (isRunning) {
        interval = setInterval(() => setElapsed((prev) => prev + 1), 1000);
        setIcon(faPause);
      }
      return () => clearInterval(interval);
    }, [isRunning]);

    return {
      elapsed: elapsed,
      isRunning,
      start: () => (setIsRunning(true), setIcon(faPause)),
      stop: () => (setIsRunning(false), setIcon(faPlay)),
      reset: () => (setElapsed(0), setIcon(faPlay)),
    };
  }

  function handleToggle() {
    if (!stopWatch.isRunning) {
      stopWatch.start();
    } else if (stopWatch.isRunning) {
      stopWatch.stop();
    }
  }

  function handleClick() {
    if (stopWatch.elapsed !== 0 && !stopWatch.isRunning) {
      stopWatch.reset();
    }
  }

  return (
    <div>
      <div className="circle" onClick={handleClick}>
        {stopWatch.elapsed}
      </div>
      <div
        className={`icon ${stopWatch.isRunning ? 'pause' : 'play'}`}
        onClick={handleToggle}>
        {' '}
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
}
