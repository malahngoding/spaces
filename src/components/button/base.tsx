/**
 */
import {
  styledBaseAltButton,
  styledBaseButton,
  styledBaseButtonSmall,
} from './base.css';
import type { ReactElement } from 'react';

interface ButtonProps {
  children: ReactElement | ReactElement[] | string;
  onClick?: () => void | Promise<void>;
}
export const Button = (props: ButtonProps): ReactElement => {
  return (
    <button className={styledBaseButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export const SmallButton = (props: ButtonProps): ReactElement => {
  return (
    <button className={styledBaseButtonSmall} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export const AltButton = (props: ButtonProps): ReactElement => {
  return (
    <button className={styledBaseAltButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
