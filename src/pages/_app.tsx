import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { NextIntlProvider, IntlMessages } from 'next-intl';

import '@styles/minireset.min.css';
import '@styles/rush.min.css';
import '@fontsource/montserrat/900.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/mononoki/400.css';

import { darkTheme, globalCss } from '@config/stitches.config';

const globalStyles = globalCss({
  body: {
    backgroundColor: `$slate1`,
    fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
});

export default function MyApp({
  Component,
  pageProps: { session, messages, ...pageProps },
}: AppProps) {
  globalStyles();
  return (
    <>
      <NextIntlProvider messages={messages as IntlMessages}>
        <ThemeProvider
          enableSystem={false}
          defaultTheme="light"
          attribute="class"
          value={{ light: `light-theme`, dark: darkTheme.className }}
        >
          <SessionProvider session={session} refetchInterval={5 * 60}>
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </NextIntlProvider>
    </>
  );
}
