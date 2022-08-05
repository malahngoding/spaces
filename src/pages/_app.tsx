import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { NextIntlProvider, AbstractIntlMessages } from 'next-intl';

import '@styles/minireset.min.css';
import '@styles/rush.min.css';
import '@styles/prism.css';
import '@fontsource/m-plus-1/300.css';
import '@fontsource/m-plus-1/400.css';
import '@fontsource/m-plus-1/700.css';
import '@fontsource/m-plus-1/900.css';

import { darkTheme, globalCss } from '@config/stitches.config';
import { handleI18nError } from '@utils/intl';

const globalStyles = globalCss({
  body: {
    backgroundColor: `$slate1`,
    fontFamily: `"M PLUS 1", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
});

export default function MyApp({
  Component,
  pageProps: { session, messages, ...pageProps },
}: AppProps) {
  globalStyles();
  return (
    <>
      <NextIntlProvider
        messages={messages as AbstractIntlMessages}
        onError={handleI18nError}
      >
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
