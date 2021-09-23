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
      <Head>
        <title>
          {title} - {ApplicationName}
        </title>
      </Head>
      <Box className="wrapper">{children}</Box>
    </>
  );
};
