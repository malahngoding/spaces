import type { InsteadLocale } from '.';
import { publicApplicationName } from '@config/application';
export const table: InsteadLocale = {
  locale: 'English',
  title: 'Next.js 10 + Rosetta with native i18n integration',
  subtitle: 'Click below to update your current locale 👇',
  profile: {
    button: 'Press me!',
  },
  welcome: 'Welcome {{name}}! 😃', // with variable replacement
  cookies: {
    firstConsent: `We use some essential cookies to make this website work.`,
    secondConsent: `We’d like to set additional cookies to understand how you use ${publicApplicationName}, remember your settings and improve our services.`,
  },
};
