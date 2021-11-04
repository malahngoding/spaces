import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { FooterNavigation } from '@components/navigations/footer';
import { MainDesign } from '@components/design/main';
import { Box } from '@components/design/box';
import { DesignNavigation } from '@components/navigations/alt';

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

export const DesignLayout = (props: BaseLayoutProps): JSX.Element => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>
          {title} - {ApplicationName}
        </title>
      </Head>
      <DesignNavigation />
      <MainDesign>
        <Box className="wrapper">{children}</Box>
        <FooterNavigation />
      </MainDesign>
    </>
  );
};
