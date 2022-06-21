import { useEffect } from 'react';

interface CountdownTickerProps {
  timeLeft: number;
  setTimeLeft: (value: number) => void;
}

export const CountdownTicker = (props: CountdownTickerProps) => {
  useEffect(() => {
    if (!props.timeLeft) return;
    const intervalId = setInterval(() => {
      props.setTimeLeft(props.timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [props]);
  return <div>{props.timeLeft}</div>;
};
