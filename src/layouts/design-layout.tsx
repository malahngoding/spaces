import Head from 'next/head';
import dynamic from 'next/dynamic';

import { ApplicationName } from '@config/application';
import { FooterNavigation } from '@components/navigations/footer';
import { MainDesign } from '@components/design/main';
import { Box } from '@components/design/box';

const DesignNavigationLazy = dynamic(
  (): any =>
    import(`@components/navigations/alt`).then((mod) => mod.DesignNavigation),
  { ssr: false },
);

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

export const DesignLayout = (props: BaseLayoutProps): JSX.Element => {
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
      <DesignNavigationLazy />
      <MainDesign>
        <Box className="wrapper">{children}</Box>
        <FooterNavigation />
      </MainDesign>
    </>
  );
};
