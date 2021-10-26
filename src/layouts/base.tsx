import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { NavigationBar } from '@components/navigation-bar';
import { FooterNavigation } from '@components/footer-navigation';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';
import dynamic from 'next/dynamic';

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

export const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const SideNavigation = dynamic((): any =>
    import(`@components/side-navigation`).then((mod) => mod.SideNavigation),
  );
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
        <NavigationBar />
        <Box className="wrapper">{children}</Box>
        <FooterNavigation />
      </Main>
    </>
  );
};
