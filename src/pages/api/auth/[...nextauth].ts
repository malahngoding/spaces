import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ethers } from 'ethers';

import { issueMicrosToken, issueFilamentsToken } from '@services/auth-service';
import { getProfileDetails } from '@services/profile-service';
import { ApplicationUrl } from '@config/application';

export default NextAuth({
  secret: process.env.JWT_SECRET,
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
              `for this website ${ApplicationUrl}`,
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
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || ``,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ``,
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

        const responseMicros = await issueMicrosToken(
          credentials?.address.toString() || ``,
          wallet,
          profile?.name || credentials?.address.toString() || ``,
          profile?.email ||
            `${credentials?.address.toString()}@malahngoding.com` ||
            ``,
        );
        const responseFilaments = await issueFilamentsToken(
          credentials?.address.toString() || ``,
          wallet,
        );
        user.microsToken = responseMicros.data.payload.token;
        user.filamentsToken = responseFilaments.data.payload.token;
        return true;
      }
      if (account.provider === `github`) {
        const responseMicros = await issueMicrosToken(
          account.providerAccountId,
          'GITHUB',
          profile?.name || ``,
          profile?.email || ``,
        );
        const responseFilaments = await issueFilamentsToken(
          account.providerAccountId,
          'GITHUB',
        );
        user.microsToken = responseMicros.data.payload.token;
        user.filamentsToken = responseFilaments.data.payload.token;
        return true;
      }
      if (account.provider === `google`) {
        const responseMicros = await issueMicrosToken(
          account.providerAccountId,
          'GOOGLE',
          profile?.name || ``,
          profile?.email || ``,
        );
        const responseFilaments = await issueFilamentsToken(
          account.providerAccountId,
          'GOOGLE',
        );
        user.microsToken = responseMicros.data.payload.token;
        user.filamentsToken = responseFilaments.data.payload.token;
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
      session.filamentsToken = token.filamentsToken as string;
      session.microsToken = token.microsToken as string;
      session.user = undefined;
      const currentUser = await getProfileDetails(session?.microsToken || ``);
      session.currentUser = currentUser.data.payload;
      session.fresh = currentUser.data.payload.fresh;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.microsToken = user.microsToken;
        token.filamentsToken = user.filamentsToken;
      }

      return token;
    },
  },
});
