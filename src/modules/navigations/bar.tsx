/**
 */
import { styledLeft, styledNavbar, styledRight } from './bar.css';
import Image from 'next/image';
import type { ReactElement } from 'react';

export const NavigationBar = (): ReactElement => {
  return (
    <div className={styledNavbar}>
      <div className={styledLeft}>
        <Image
          src="/static/favicons/mstile-150x150.png"
          alt="Logo of Malah Ngoding, The Boxes"
          width={48}
          height={48}
        />
      </div>
      <div className={styledRight}>Right</div>
    </div>
  );
};
