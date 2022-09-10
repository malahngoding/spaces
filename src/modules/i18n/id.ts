import type { InsteadLocale } from '.';
import { publicApplicationName } from '@config/application';

export const table: InsteadLocale = {
  locale: 'Indonesia',
  title: 'Next.js 10 + Rosetta dengan integrasi i18n',
  subtitle: 'Click dibawah untuk mengganti bahasamu 👇',
  profile: {
    button: 'Tekan Aku!',
  },
  welcome: 'Selamat Datang {{name}}! 😃', // with variable replacement
  cookies: {
    firstConsent: `Kami menggunakan beberapa cookies untuk memastikan platform bekerja dengan seharusnya.`,
    secondConsent: `Kemi juga ingin menambahkan cookies lainnya untuk mengetahuin bagaimana anda menggunakan ${publicApplicationName}, menyimpan pengaturan anda dan memperbaiki layanan kami.`,
    acceptConsent: `Terima`,
    declineConsent: `Tolak`,
  },
};
