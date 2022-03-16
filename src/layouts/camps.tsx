import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';
import { SideNavigation } from '@components/navigations/side';
import { FooterNavigation } from '@components/navigations/footer';

interface CampsLayoutProps {
  title: string;
  sideNav: JSX.Element;
  children: JSX.Element;
}

export const CampsLayout = (props: CampsLayoutProps): JSX.Element => {
  const { title, sideNav, children } = props;
  return (
    <>
      <Head>
        <title>
          {title} - {ApplicationName}
        </title>
      </Head>
      <SideNavigation />
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
                overflow: `scroll`,
                height: `100%`,
                borderRight: `1px solid $slate6`,
              }}
            >
              {sideNav}
            </Box>
            <Box
              css={{
                overflow: `scroll`,
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
