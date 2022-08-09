import Head from 'next/head';
import dynamic from 'next/dynamic';

import { ApplicationName } from '@config/application';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';
import { SideNavigation } from '@components/navigations/side';

const SideNavigationLazy = dynamic(
  (): any =>
    import(`@components/navigations/side`).then((mod) => mod.SideNavigation),
  { ssr: false },
);

interface QuizLayoutProps {
  title: string;
  children: JSX.Element;
}

export const QuizLayout = (props: QuizLayoutProps): JSX.Element => {
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
        <Box className="wrapper">{children}</Box>
      </Main>
    </>
  );
};
