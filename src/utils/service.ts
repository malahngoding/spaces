import Axios from 'axios';

export const service = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_MICROS_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
