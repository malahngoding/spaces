import type { InsteadLocale } from '.';
import { publicApplicationName } from '@config/application';

export const table: InsteadLocale = {
  locale: 'Indonesia',
  title: `Hello World, Selamat Datang di`,
  subTitle: 'Dunia Malah Ngoding 🌐',
  welcome: 'Selamat Datang {{name}}! 😃',
  profile: {
    button: 'Tekan Aku!',
  },
  auth: {
    connect: `Bergabung`,
    title: `Hubungkan Account Kamu`,
    subTitle: `Dapatkan akses ke fitur yang menarik dan bergabung bersama komunitas. Belajar bersama, tumbuh sebagai sebuah platform.`,
    metamask: {
      title: `Tekan Sign pada web3wallet kamu untuk melanjutkan`,
      subTitle: `Kita menggunakan signature ini untuk memastikan bahwasannya memang kamu pemilik wallet tersebut.`,
    },
    hashpack: {
      title: `Hubungkan dengan Hedera Wallet Hashpack`,
      subTitle: `Klik Approve atau copy x paste connection string`,
    },
  },
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
    rights: `Space adalah proyek open-source yang dikelola oleh tim Malah Ngoding`,
    secondRights: `©{{getCurrentYear}} Malah Ngoding. Hak cipta dilindungi undang-undang.`,
  },
  appState: {
    loading: `Memuat...`,
  },
};
