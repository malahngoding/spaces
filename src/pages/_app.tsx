/*
 */
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

import { Fragment } from 'react';

import '@styles/minireset.css';
import '@styles/instead.css';
/*
 */
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
/*
 *
 */
function InsteadAppsBase({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Fragment>
      <Component {...pageProps} />
    </Fragment>,
  );
}

export default InsteadAppsBase;
