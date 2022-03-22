import Head from 'next/head';

import { ApplicationName } from '@config/application';
import { Box } from '@components/design/box';
import { SideNavigation } from '@components/navigations/side';
import { Main } from '@components/design/main';
import { PeekProfile } from '@components/profile/peek-profile';
import { FooterNavigation } from '@components/navigations/footer';

interface HeroLayoutProps {
  title: string;
  children: JSX.Element;
}

export const HeroLayout = (props: HeroLayoutProps): JSX.Element => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>
          {title} - {ApplicationName}
        </title>
      </Head>
      <SideNavigation />
      <Main>
        <PeekProfile />
        <Box className="wrapper">{children}</Box>
        <FooterNavigation />
      </Main>
    </>
  );
};
