import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

import { postOnBoardingUrlHandler } from '@utils/urlHandler';

export default function OnBoardingHooks() {
  return <></>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (session?.fresh) {
    return {
      redirect: {
        permanent: false,
        destination: `/on-boarding/first?redirect=${
          context.query.redirect as string
        }`,
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: `${postOnBoardingUrlHandler(
        context.query.redirect as string,
      )}`,
    },
  };
}
