import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import { issueMicrosToken, issueFilamentsToken } from '@services/auth-service';
import { getProfileDetails } from '@services/profile-service';

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
      },
      async authorize(credentials, req) {
        // TODO: Implement check
        return {
          name: `${credentials?.address}`,
          email: `${credentials?.address}@polygon.network`,
          image: `https://avatars.dicebear.com/api/miniavs/${credentials?.address}.svg`,
        };
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
        const responseMicros = await issueMicrosToken(
          credentials?.address.toString() || ``,
          'METAMASK',
          profile?.name || ``,
          profile?.email || ``,
        );
        const responseFilaments = await issueFilamentsToken(
          credentials?.address.toString() || ``,
          'METAMASK',
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
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.filamentsToken = token.filamentsToken as string;
      session.microsToken = token.microsToken as string;
      session.user = undefined;
      const currentUser = await getProfileDetails(session?.microsToken || ``);
      session.currentUser = currentUser.data.payload;
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
