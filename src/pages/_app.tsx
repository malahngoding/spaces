import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@styles/minireset.min.css';
import '@fontsource/montserrat/900.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';
import { darkTheme, globalCss } from '@config/stitches.config';

const globalStyles = globalCss({
  body: {
    backgroundColor: `$slate1`,
    fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <ThemeProvider
        enableSystem={false}
        defaultTheme="light"
        attribute="class"
        value={{ light: `light-theme`, dark: darkTheme.className }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
