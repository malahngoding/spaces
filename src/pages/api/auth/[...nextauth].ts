import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProviders from 'next-auth/providers/credentials';
import authService from '@services/auth-service';

export default NextAuth({
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  pages: {
    signIn: `/auth/signin`,
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
    CredentialsProviders({
      name: `Credentials`,
      async authorize(req) {
        try {
          const { email } = req;
          const { password } = req;
          const response = await authService({
            method: `post`,
            url: `/api/signin`,
            data: {
              email,
              password,
            },
          });

          if (response.data.status === `SUCCESS`) {
            return {
              name: response.data.user.name,
              email: response.data.user.email,
              image: `https://avatars.dicebear.com/api/miniavs/${response.data.user.email}.svg`,
            };
          }
          return {
            name: ``,
            email: ``,
            image: `https://avatars.dicebear.com/api/miniavs/error.svg`,
          };
        } catch (e) {
          const errorMessage = e.response.data.message;
          throw new Error(`${errorMessage}&email=`);
        }
      },
    }),
  ],
});
