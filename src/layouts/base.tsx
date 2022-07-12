import Head from 'next/head';
import dynamic from 'next/dynamic';

import { ApplicationName } from '@config/application';
import { NavigationBar } from '@components/navigations/bar';
import { FooterNavigation } from '@components/navigations/footer';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

const WarnMarqueeLazy = dynamic(
  (): any =>
    import(`@components/branding/warn-marquee`).then((mod) => mod.WarnMarquee),
  { ssr: false },
);

const SideNavigationLazy = dynamic(
  (): any =>
    import(`@components/navigations/side`).then((mod) => mod.SideNavigation),
  { ssr: false },
);

const PeekProfileLazy = dynamic(
  (): any => import(`@components/peek-profile`).then((mod) => mod.PeekProfile),
  { ssr: false },
);

export const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { title, children } = props;

  const titleHandler = (title: string, applicationName: string): string => {
    return `${title} - ${applicationName}`;
  };

  return (
    <>
      <Head key="base">
        <title>{titleHandler(title, ApplicationName)}</title>
        <meta
          name="description"
          content={titleHandler(title, ApplicationName)}
        />
        <meta
          property="og:title"
          content={`${title} - ${ApplicationName}`}
          key="title"
        />
      </Head>
      <WarnMarqueeLazy />
      <SideNavigationLazy />
      <Main>
        <PeekProfileLazy />
        <NavigationBar />
        <Box className="wrapper">{children}</Box>
        <FooterNavigation />
      </Main>
    </>
  );
};
