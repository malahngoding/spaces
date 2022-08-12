/**
 */
import { Footer } from '@modules/navigations/footer';
import { Fragment } from 'react';
import Head from 'next/head';
import { NavigationBar } from '@modules/navigations/bar';
import type { ReactElement } from 'react';
import { styledBase } from './base.css';
import { titleMaker } from '@utils/title-maker';
/**
 */
type BaseLayoutProps = {
  children: ReactElement | ReactElement[];
  title: string;
};
/**
 */
const BaseLayout = (props: BaseLayoutProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{titleMaker(props.title)}</title>
      </Head>
      <NavigationBar />
      <div className={styledBase}>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export { BaseLayout };
