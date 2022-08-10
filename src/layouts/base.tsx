/**
 */
import { Fragment } from 'react';
import Head from 'next/head';
import type { ReactElement } from 'react';
import { styledBase } from './base.css';
import { titleMaker } from '@utils/title-maker';
/**
 */
type BaseLayoutProps = {
  children: ReactElement | ReactElement[];
};
/**
 */
const BaseLayout = (props: BaseLayoutProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{titleMaker(`Hello World`)}</title>
      </Head>
      <div className={styledBase}>{props.children}</div>
    </Fragment>
  );
};

export { BaseLayout };
