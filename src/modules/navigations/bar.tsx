/**
 */
import { styledLeft, styledNavbar, styledRight } from './bar.css';
import Link from 'next/link';
import { LinkedLogo } from '@components/branding/linked-logo';
import type { ReactElement } from 'react';

export const NavigationBar = (): ReactElement => {
  const links = [
    { url: `/learn`, title: `Learn` },
    { url: `/camps`, title: `Camps` },
    { url: `/about-us`, title: `About Us` },
  ];

  return (
    <nav>
      <div className={styledNavbar}>
        <div className={styledLeft}>
          <LinkedLogo href="/" />
        </div>
        <div className={styledRight}>
          {links.map((item) => {
            return (
              <Link key={item.url} href={item.url} passHref>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
