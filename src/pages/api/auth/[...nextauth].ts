import { privateJwtSecret, publicApplicationUrl } from '@config/application';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import { ethers } from 'ethers';
import { issueMicrosToken } from '@services/auth-adapter';

export const authOptions: NextAuthOptions = {
  secret: privateJwtSecret,
  session: {
    strategy: `jwt`
  },
  pages: {
    newUser: `/auth/connect`,
    error: `/auth/error`,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        address: { label: `Address`, type: `text` },
        signer: { label: `Signer`, type: `text` },
        signature: { label: `Signature`, type: `text` },
        network: { label: `Network`, type: `text` },
      },
      async authorize(credentials): Promise<any> {
        switch (credentials?.network) {
          case `evm`:
            const message = [
              `I have read and accept the terms and condition`,
              `for this website ${publicApplicationUrl}`,
              `Please sign me in!`,
            ].join('\n');
            const signature = credentials.signature;
            const verified = ethers.utils.verifyMessage(message, signature);
            if (
              verified.toLowerCase() ===
              credentials?.address.toString().toLowerCase()
            ) {
              return {
                name: `${credentials?.address.toString()}`,
                email: `${credentials?.signer}@malahngoding.com`,
                image: `https://avatars.dicebear.com/api/miniavs/${credentials?.address}.svg`,
              };
            }
            return null;
          default:
            return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === `credentials`) {
        let wallet;
        if (credentials?.network === `evm`) {
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
        user.microsToken = responseMicros.payload.token;
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.microsToken = token.microsToken as string;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.microsToken = user.microsToken;
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
