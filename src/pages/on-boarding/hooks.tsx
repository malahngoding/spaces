/* 3rd Party Modules Import */
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
/* Internal Modules Import */
import { postOnBoardingUrlHandler } from '@utils/urlHandler';
/* Types Import */
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Next Laziefied Components Import
 * @private
 */
/**
 * Next Page Component Declaration
 * @public
 */
export default function OnBoardingHooks() {
  return <></>;
}
/**
 * Next Page Server Code Declaration
 * @public
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
