/* 3rd Party Modules Import */
import { useEffect } from 'react';
/* Internal Modules Import */
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Component Props Declaration
 * @private
 */
interface CountdownTickerProps {
  timeLeft: number;
  setTimeLeft: (value: number) => void;
}
/**
 * Component Declaration
 * @public
 */
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
 * @private
 */
