/**
 */
import type { ReactElement } from 'react';
import { styledSideNav } from './side.css';

export const SideNav = (): ReactElement => {
  return (
    <aside>
      <div className={styledSideNav}>Side</div>
    </aside>
  );
};
