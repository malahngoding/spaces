import Head from 'next/head';
import { ApplicationName } from '@config/application';
import { Box } from '@components/design/box';

interface BaseLayoutProps {
  title: string;
  children: JSX.Element;
}

export const BlankLayout = (props: BaseLayoutProps): JSX.Element => {
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
      <Box className="wrapper">{children}</Box>
    </>
  );
};
