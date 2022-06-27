import Head from 'next/head';
import dynamic from 'next/dynamic';

import { ApplicationName } from '@config/application';
import { NavigationBar } from '@components/navigations/bar';
import { FooterNavigation } from '@components/navigations/footer';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';
import { SideNavigation } from '@components/navigations/side';
import { PeekProfile } from '@components/profile/peek-profile';

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

const WarnMarqueeComponent = dynamic(
  (): any =>
    import(`@components/branding/warn-marquee`).then((mod) => mod.WarnMarquee),
  { ssr: false },
);

export const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { title, children } = props;

  const titleHandler = (title: string, applicationName: string): string => {
    return `${title} - ${applicationName}`;
  };

  return (
    <>
      <Head>
        <title>{titleHandler(title, ApplicationName)}</title>
        <meta
          property="og:title"
          content={`${title} - ${ApplicationName}`}
          key="title"
        />
      </Head>
      <WarnMarqueeComponent />
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
