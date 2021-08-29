import Head from 'next/head';
import { ApplicationName } from '@config/application';

interface BaseLayoutProps {
  title: string;
  children: any;
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
      <main>{children}</main>
      <style jsx global>{`
        * {
          font-family: 'Montserrat';
        }
      `}</style>
    </>
  );
};
