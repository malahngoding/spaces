/** 3rd Party Modules Import */
import { getSession } from 'next-auth/react';
/** Internal Modules Import */
import { postOnBoardingUrlHandler } from '@utils/urlHandler';
/** Types Import */
import type { GetServerSidePropsContext } from 'next';
/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
export default function OnBoardingHooks() {
  return <></>;
}
/**
 * Next Page Server Code Declaration
 *
 */
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
/**
 * Internal Component Declaration
 *
 */
