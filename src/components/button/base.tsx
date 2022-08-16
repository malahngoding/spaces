/**
 */
import type { ReactElement } from 'react';

interface ButtonProps {
  children: ReactElement | ReactElement[] | string;
  onClickHandler: () => void | Promise<void>;
}
export const Button = (props: ButtonProps): ReactElement => {
  return <button onClick={props.onClickHandler}>{props.children}</button>;
};
