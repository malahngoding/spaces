/**
 */
import type { ReactElement } from 'react';

interface ButtonProps {
  children: ReactElement | ReactElement[] | string;
}
export const Button = (props: ButtonProps): ReactElement => {
  return <button>{props.children}</button>;
};
