import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CryptoJS from 'crypto-js';

import { issueToken } from '@services/auth-service';
import { getProfileDetails } from '@services/profile-service';

export default NextAuth({
  secret: process.env.JWT_SECRET,
  pages: {
    newUser: `/auth/connect`,
    error: `/auth/error`,
  },
  providers: [
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
      if (account.provider === `github`) {
        const response = await issueToken(account.providerAccountId, 'GITHUB');
        user.insteadToken = response.data.payload.token;
        return true;
      }
      if (account.provider === `google`) {
        const response = await issueToken(account.providerAccountId, 'GOOGLE');
        user.insteadToken = response.data.payload.token;
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.insteadToken = token.insteadToken as string;
      session.user = undefined;
      const currentUser = await getProfileDetails(session?.insteadToken || ``);
      session.currentUser = currentUser.data.payload;

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.insteadToken = user.insteadToken;
      }

      return token;
    },
  },
});
