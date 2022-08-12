/**
 */
import type { ReactElement } from 'react';
import { styledNavbar } from './bar.css';

export const NavigationBar = (): ReactElement => {
  return (
    <div className={styledNavbar}>
      <div>Left</div>
      <div>Right</div>
    </div>
  );
};
