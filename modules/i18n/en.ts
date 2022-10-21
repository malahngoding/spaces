import type { InsteadLocale } from '.';
import { publicApplicationName } from '@config/application';

export const table: InsteadLocale = {
  locale: 'English',
  title: `Hello World, Welcome to`,
  subTitle: 'The Internet of Malah Ngoding 🌐',
  welcome: 'Welcome {{name}}! 😃',
  auth: {
    connect: `Connect`,
    title: `Connect Your Account;`,
    subTitle: `Gain access to exciting features and learning community. Grow together as a platform.;`,
    metamask: {
      title: `Sign the message in your wallet to continue.`,
      subTitle: `We uses this signature to verify that you’re the owner of this address.`,
    },
    hashpack: {
      title: `HashConnect with Hashpack;`,
      subTitle: `Approve or Copy & Paste the connection string;`,
    },
  },
  navigations: {
    learn: `Learn`,
    camps: `Camps`,
    experiments: `Experiments`,
    aboutUs: `About Us`,
    account: `Account`,
    logout: `Log out`
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
  appState: {
    loading: `Loading...`,
  },
};
