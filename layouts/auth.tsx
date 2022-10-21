/**
 */
import { Fragment, Suspense } from 'react';
import { styledAuth, styledCard, styledLeft, styledRight } from './auth.css';
import Head from 'next/head';
import type { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { titleMaker } from '@utils/title-maker';
/**
 */
type AuthLayoutProps = {
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
const AuthLayout = (props: AuthLayoutProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{titleMaker(props.title)}</title>
      </Head>
      <div className={styledAuth}>
        <div className={styledLeft} />
        <div className={styledRight}>
          <div className={styledCard}>{props.children}</div>
        </div>
      </div>
      <Suspense fallback={` `}>
        <CookieConsentLazy />
      </Suspense>
    </Fragment>
  );
};

export { AuthLayout };
