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
  (): any => import(`@modules/shared/cookie-consent`),
  { ssr: false, suspense: true },
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
      <div className={styledBase}>{props.children}</div>
      <Footer />
      <Suspense fallback={<p>...</p>}>
        <CookieConsentLazy />
      </Suspense>
    </Fragment>
  );
};

export { BaseLayout };
