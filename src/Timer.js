import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <p>Time: {seconds} seconds</p>
      
      <Button onClick={handleStart} /*disabled={isActive} */>Start</Button>
      <Button onClick={handleStop} /*disabled={!isActive} */>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
    
    </div>
  );
};

export default Timer;
