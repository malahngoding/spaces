import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CryptoJS from 'crypto-js';

import { issueToken } from '@services/auth-service';

export default NextAuth({
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: `/auth/signin`,
    newUser: `/auth/register`,
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
      session.insteadToken = token.insteadToken;
      const theToken = session.insteadToken as string;
      const bytes = CryptoJS.AES.decrypt(
        theToken.replace('instead_', ''),
        process.env.INSTEAD_TOKEN as string,
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      session.currentUser = {
        avatar: decryptedData.avatar,
        bio: decryptedData.bio,
        name: decryptedData.name,
        email: decryptedData.email,
        joinedSince: decryptedData.joinedSince,
      };
      session.user = undefined;
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
