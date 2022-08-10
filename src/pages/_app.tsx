/*
 */
import '@styles/instead.css';
import '@styles/minireset.css';
import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';

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
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        value={{ light: `light`, dark: `dark` }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>,
  );
}

export default InsteadAppsBase;
