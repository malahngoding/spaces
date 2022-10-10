import { EnterIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { SmallButton } from '@components/button/base';
import { useSession } from 'next-auth/react';

export const ConnectButton = (): ReactElement => {
  const { data: session, status } = useSession();
  return (
    <Fragment>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'unauthenticated' ? (
        <Link href="/auth/connect" passHref key="/auth/connect">
          <SmallButton>
            <p>Connect</p>
            <EnterIcon />
          </SmallButton>
        </Link>
      ) : (
        <SmallButton>Avatar</SmallButton>
      )}
    </Fragment>
  );
};
