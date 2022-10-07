import type { InsteadLocale } from '.';
import { publicApplicationName } from '@config/application';
export const table: InsteadLocale = {
  locale: 'English',
  title: `Hello World, Welcome to`,
  subTitle: 'The Internet of Malah Ngoding 🌐',
  profile: {
    button: 'Press me!',
  },
  welcome: 'Welcome {{name}}! 😃',
  navigations: {
    learn: `Learn`,
    camps: `Camps`,
    experiments: `Experiments`,
    aboutUs: `About Us`,
  },
  cookies: {
    firstConsent: `We use some essential cookies to make this website work.`,
    secondConsent: `We’d like to set additional cookies to understand how you use ${publicApplicationName}, remember your settings and improve our services.`,
    acceptConsent: `Accept All Cookies`,
    declineConsent: `Decline Additional Cookies`,
  },
  footer: {
    rights: `Space is an open-source project maintained by Malah Ngoding Team`,
    secondRights: `Copyright ©{{getCurrentYear}} Malah Ngoding. All rights reserved.`,
  },
};
