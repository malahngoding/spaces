/**
 */
import {
  styledLeft,
  styledMenuGroup,
  styledNavLink,
  styledNavbar,
  styledRight,
} from './bar.css';
import { Avatar } from '@components/avatar/avatar';
import Link from 'next/link';
import { LinkedLogo } from '@components/branding/linked-logo';
import type { ReactElement } from 'react';

export const NavigationBar = (): ReactElement => {
  const links = [
    { url: `/learn`, title: `Learn` },
    { url: `/camps`, title: `Camps` },
    { url: `/experiments`, title: `Experiments` },
    { url: `/about-us`, title: `About Us` },
  ];

  return (
    <nav>
      <div className={styledNavbar}>
        <div className={styledLeft}>
          <LinkedLogo href="/" />
          <div className={styledMenuGroup}>
            {links.map((item) => {
              return (
                <Link key={item.url} href={item.url} passHref>
                  <div className={styledNavLink}>{item.title}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styledRight}>
          <Avatar />
        </div>
      </div>
    </nav>
  );
};
