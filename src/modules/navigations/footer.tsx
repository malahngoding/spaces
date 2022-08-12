/**
 */
import type { ReactElement } from 'react';
import { styledFooter } from './footer.css';

export const Footer = (): ReactElement => {
  return (
    <div className={styledFooter}>
      <div> Footer</div>
    </div>
  );
};
