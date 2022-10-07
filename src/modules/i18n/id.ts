import type { InsteadLocale } from '.';
import { publicApplicationName } from '@config/application';

export const table: InsteadLocale = {
  locale: 'Indonesia',
  title: `Hello World, Selamat Datang di`,
  subTitle: 'Dunia Malah Ngoding 🌐',
  profile: {
    button: 'Tekan Aku!',
  },
  welcome: 'Selamat Datang {{name}}! 😃',
  navigations: {
    learn: `Membaca`,
    camps: `Berkemah`,
    experiments: `Percobaan`,
    aboutUs: `Tentang Kami`,
  },
  cookies: {
    firstConsent: `Kami menggunakan beberapa cookies untuk memastikan platform bekerja dengan seharusnya.`,
    secondConsent: `Kemi juga ingin menambahkan cookies lainnya untuk mengetahui bagaimana anda menggunakan ${publicApplicationName}, menyimpan pengaturan anda dan memperbaiki layanan kami.`,
    acceptConsent: `Terima Semua Cookies`,
    declineConsent: `Tolak Cookies Tambahan`,
  },
  footer: {
    rights: `Space adalah proyek open-source yang dijaga oleh tim Malah Ngoding`,
    secondRights: `©{{getCurrentYear}} Malah Ngoding. Hak cipta dilindungi undang-undang.`,
  },
};
