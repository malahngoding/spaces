/**
 */
import {
  styledLeft,
  styledMenuGroup,
  styledNavLink,
  styledNavbar,
  styledRight,
} from './bar.css';
import { InsteadLocale } from '@modules/i18n';
import Link from 'next/link';
import { LinkedLogo } from '@components/branding/linked-logo';
import type { ReactElement } from 'react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useI18n } from 'next-rosetta';
/**
 *
 */
const LazyConnectButton = dynamic<{}>(
  (): any =>
    import(`@modules/auth/connect-button`).then((mod) => mod.ConnectButton),
  {
    ssr: false,
  },
);
/**
 *
 */
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
          <Suspense fallback={<p>{t('appState.loading')}</p>}>
            <LazyConnectButton />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};
