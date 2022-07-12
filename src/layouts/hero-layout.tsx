import Head from 'next/head';

import { ApplicationName } from '@config/application';
import { Box } from '@components/design/box';
import { SideNavigation } from '@components/navigations/side';
import { Main } from '@components/design/main';
import { PeekProfile } from '@components/peek-profile';
import { FooterNavigation } from '@components/navigations/footer';

import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

const SideNavigationLazy = dynamic(
  (): any =>
    import(`@components/navigations/side`).then((mod) => mod.SideNavigation),
  { ssr: false },
);

const PeekProfileLazy = dynamic(
  (): any => import(`@components/peek-profile`).then((mod) => mod.PeekProfile),
  { ssr: false },
);

interface HeroLayoutProps {
  title: string;
  children: ReactElement;
}
export const HeroLayout = (props: HeroLayoutProps): ReactElement => {
  const { title, children } = props;
  return (
    <>
      <Head key="instead">
        <title>
          {title} - {ApplicationName}
        </title>
        <meta
          property="og:title"
          content={`${title} - ${ApplicationName}`}
          key="title"
        />
      </Head>
      <SideNavigationLazy />
      <Main>
        <PeekProfileLazy />
        <Box className="wrapper">{children}</Box>
        <FooterNavigation />
      </Main>
    </>
  );
};
