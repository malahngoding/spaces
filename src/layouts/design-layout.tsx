import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { FooterNavigation } from '@components/footer-navigation';
import { MainDesign } from '@components/design/main';
import { Box } from '@components/design/box';
import dynamic from 'next/dynamic';

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

export const DesignLayout = (props: BaseLayoutProps): JSX.Element => {
  const DesignNavigation = dynamic((): any =>
    import(`@components/design-navigation`).then((mod) => mod.DesignNavigation),
  );
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
