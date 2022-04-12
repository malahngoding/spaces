import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { NavigationBar } from '@components/navigations/bar';
import { FooterNavigation } from '@components/navigations/footer';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';
import { SideNavigation } from '@components/navigations/side';
import { PeekProfile } from '@components/profile/peek-profile';
import { WarnMarquee } from '@components/branding/warn-marquee';

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

export const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>
          {title} - {ApplicationName}
        </title>
      </Head>
      <WarnMarquee />
      <SideNavigation />
      <Main>
        <PeekProfile />
        <NavigationBar />
        <Box className="wrapper">{children}</Box>
        <FooterNavigation />
      </Main>
    </>
  );
};
