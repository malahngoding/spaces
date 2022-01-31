import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { NavigationBar } from '@components/navigations/bar';
import { FooterNavigation } from '@components/navigations/footer';
import { Main } from '@components/design/main';
import { Box } from '@components/design/box';
import { SideNavigation } from '@components/navigations/side';
import { PeekProfile } from '@components/profile/peek-profile';

interface QuizLayoutProps {
  title: string;
  children: JSX.Element;
}

export const QuizLayout = (props: QuizLayoutProps): JSX.Element => {
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
        <Box className="wrapper">{children}</Box>
      </Main>
    </>
  );
};
