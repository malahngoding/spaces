import Axios from 'axios';

export const microService = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_MICROS_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const filamentService = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_FILAMENTS_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
