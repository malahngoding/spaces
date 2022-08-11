import ky from 'ky-universal';

export const microService = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_MICROS_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Requested-From': 'instead-spaces',
  },
});

export const filamentService = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_FILAMENTS_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Requested-From': 'instead-spaces',
  },
});
