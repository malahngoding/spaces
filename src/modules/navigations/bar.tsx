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
import { InsteadLocale } from '@modules/i18n';
import Link from 'next/link';
import { LinkedLogo } from '@components/branding/linked-logo';
import type { ReactElement } from 'react';
import { useI18n } from 'next-rosetta';

export const NavigationBar = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();

  const links = [
    { url: `/learn`, title: t('navigations.learn') },
    { url: `/camps`, title: t('navigations.camps') },
    { url: `/experiments`, title: t('navigations.experiments') },
    { url: `/about-us`, title: t('navigations.aboutUs') },
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
