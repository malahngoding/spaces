import { AppProps } from 'next/app';

import '@styles/reset.css';
import '@fontsource/montserrat/900.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';
import { globalCss } from '@config/stitches.config';

const globalStyles = globalCss({
  body: {
    fontFamily: `"Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
