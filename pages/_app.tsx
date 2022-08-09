import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

import { Fragment } from 'react';

import '@fontsource/m-plus-1/variable.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function Base({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Fragment>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          font-family: 'M PLUS 1', sans-serif;
        }
      `}</style>
    </Fragment>,
  );
}

export default Base;
