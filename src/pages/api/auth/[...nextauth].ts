import {
  privateGithubId,
  privateGithubSecret,
  privateGoogleClientId,
  privateGoogleSecret,
  privateJwtSecret,
  publicApplicationUrl,
} from '@config/application';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';
import { ethers } from 'ethers';
import { getProfileDetails } from '@services/profile-adapter';
import { issueMicrosToken } from '@services/auth-adapter';

export default NextAuth({
  secret: privateJwtSecret,
  pages: {
    newUser: `/auth/connect`,
    error: `/auth/error`,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        address: { label: 'Address', type: 'text' },
        signer: { label: 'Signer', type: 'text' },
        signature: { label: 'Signature', type: 'text' },
        network: { label: 'Network', type: 'text' },
      },
      async authorize(credentials, req) {
        switch (credentials?.network) {
          case 'evm':
            const message = [
              `I have read and accept the terms and condition`,
              `for this website ${publicApplicationUrl}`,
              `Please sign me in!`,
            ].join('\n');
            const signature = credentials?.signature || '';
            const verified = ethers.utils.verifyMessage(message, signature);

            if (
              verified.toLowerCase() ===
              credentials?.address.toString().toLowerCase()
            ) {
              return {
                name: `${credentials?.address.toString()}`,
                email: `${credentials?.address}@`,
                image: `https://avatars.dicebear.com/api/miniavs/${credentials?.address}.svg`,
              };
            }
            return null;
          case 'hedera':
            return {
              name: `${credentials?.address.toString()}`,
              email: `${credentials?.address}@`,
              image: `https://avatars.dicebear.com/api/miniavs/${credentials?.address}.svg`,
            };
          default:
            return null;
        }
      },
    }),
    GithubProvider({
      clientId: privateGithubId as string,
      clientSecret: privateGithubSecret as string,
    }),
    GoogleProvider({
      clientId: privateGoogleClientId as string,
      clientSecret: privateGoogleSecret as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'credentials') {
        let wallet;
        if (credentials?.network === 'evm') {
          wallet = `METAMASK`;
        } else {
          wallet = `HASHPACK`;
        }
        const responseMicros = await issueMicrosToken({
          identification: credentials?.address.toString() || ``,
          provider: wallet,
          name: profile?.name || credentials?.address.toString() || ``,
          email:
            profile?.email ||
            `${credentials?.address.toString()}@malahngoding.com` ||
            ``,
        });
        user.microsToken = responseMicros.data.payload.token;
        return true;
      }
      if (account.provider === `github`) {
        const responseMicros = await issueMicrosToken({
          identification: account.providerAccountId,
          provider: 'GITHUB',
          name: profile?.name || ``,
          email: profile?.email || ``,
        });
        user.microsToken = responseMicros.data.payload.token;
        return true;
      }
      if (account.provider === `google`) {
        const responseMicros = await issueMicrosToken({
          identification: account.providerAccountId,
          provider: 'GOOGLE',
          name: profile?.name || ``,
          email: profile?.email || ``,
        });
        user.microsToken = responseMicros.data.payload.token;
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return new URL(url, baseUrl).toString();
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.microsToken = token.microsToken as string;
      session.user = undefined;
      const currentUser = await getProfileDetails({
        microsToken: session?.microsToken as string,
      });
      session.currentUser = currentUser.data.payload;
      session.fresh = currentUser.data.payload.fresh;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.microsToken = user.microsToken;
      }

      return token;
    },
  },
});
