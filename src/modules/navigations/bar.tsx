/**
 */
import { styledLeft, styledNavbar, styledRight } from './bar.css';
import { LinkedLogo } from '@components/branding/linked-logo';
import type { ReactElement } from 'react';

export const NavigationBar = (): ReactElement => {
  return (
    <div className={styledNavbar}>
      <div className={styledLeft}>
        <LinkedLogo href="/" />
      </div>
      <div className={styledRight}>Right</div>
    </div>
  );
};
