/**
 */
import { Fragment, Suspense } from 'react';
import { Footer } from '@modules/navigations/footer';
import Head from 'next/head';
import { NavigationBar } from '@modules/navigations/bar';
import type { ReactElement } from 'react';
import { SideNav } from '@modules/navigations/side';
import dynamic from 'next/dynamic';
import { styledBase } from './base.css';
import { titleMaker } from '@utils/title-maker';
/**
 */
type BaseLayoutProps = {
  children: ReactElement | ReactElement[];
  title: string;
};

const CookieConsentLazy = dynamic(
  (): any => import(`@modules/cookies/cookie-consent`),
  {
    ssr: false,
  },
);
/**
 */
const BaseLayout = (props: BaseLayoutProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{titleMaker(props.title)}</title>
      </Head>
      <NavigationBar />
      <SideNav />
      <div style={{ height: `64px` }} />
      <div className={styledBase}>{props.children}</div>
      <Footer />
      <Suspense fallback={` `}>
        <CookieConsentLazy />
      </Suspense>
    </Fragment>
  );
};

export { BaseLayout };
