import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { SideNavigation } from '@components/side-navigation';
import { NavigationBar } from '@components/navigation-bar';
import { FooterNavigation } from '@components/footer-navigation';
import { Main } from '@components/design/main';

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
      <SideNavigation />
      <Main>
        <NavigationBar />
        <div className="wrapper">{children}</div>
        <FooterNavigation />
      </Main>
    </>
  );
};
