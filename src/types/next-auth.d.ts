/* eslint-disable no-shadow *
import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    microsToken: string;
    filamentsToken: string;
    currentUser: any;
    fresh: boolean;
  }
}