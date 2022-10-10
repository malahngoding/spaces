export interface InsteadLocale {
  locale: string;
  title: string;
  subTitle: string;
  welcome: string;
  profile: {
    button: string;
  };
  auth: {
    connect: string;
    title: string;
    subTitle: string;
    metamask: {
      title: string;
      subTitle: string;
    };
    hashpack: {
      title: string;
      subTitle: string;
    };
  };
  navigations: {
    learn: string;
    camps: string;
    experiments: string;
    aboutUs: string;
  };
  cookies: {
    firstConsent: string;
    secondConsent: string;
    acceptConsent: string;
    declineConsent: string;
  };
  footer: {
    rights: string;
    secondRights: string;
  };
  appState: {
    loading: string;
  };
}
