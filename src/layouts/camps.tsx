import Head from 'next/head';
import dynamic from 'next/dynamic';

import { ApplicationName } from '@config/application';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';
import { FooterNavigation } from '@components/navigations/footer';

const SideNavigationLazy = dynamic(
  (): any =>
    import(`@components/navigations/side`).then((mod) => mod.SideNavigation),
  { ssr: false },
);

interface CampsLayoutProps {
  title: string;
  sideNav: JSX.Element;
  children: JSX.Element;
}
export const CampsLayout = (props: CampsLayoutProps): JSX.Element => {
  const { title, sideNav, children } = props;
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
        <Box className="wrapper">
          <Box
            css={{
              display: `grid`,
              gridTemplateColumns: `1fr 3fr`,
              height: `100vh`,
            }}
          >
            <Box
              css={{
                overflowY: `scroll`,
                height: `100%`,
                borderRight: `1px solid $slate6`,
              }}
            >
              {sideNav}
            </Box>
            <Box
              css={{
                overflowY: `scroll`,
                height: `100%`,
              }}
            >
              {children}
              <FooterNavigation />
            </Box>
          </Box>
        </Box>
      </Main>
    </>
  );
};
