/** 3rd Party Modules Import */
import { useEffect } from 'react';
/** Internal Modules Import */
/** Types Import */
import type { ReactElement } from 'react';

/**
 * Main Component Declaration
 *
 */
interface CountdownTickerProps {
  timeLeft: number;
  setTimeLeft: (value: number) => void;
}

export const CountdownTicker = (props: CountdownTickerProps): ReactElement => {
  useEffect(() => {
    if (!props.timeLeft) return;
    const intervalId = setInterval(() => {
      props.setTimeLeft(props.timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [props]);
  return <div>{props.timeLeft}</div>;
};
/**
 * Internal Component Declaration
 *
 */
