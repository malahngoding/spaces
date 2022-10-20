import { EnterIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { SmallButton } from '@components/button/base';
import { styledConnectButton } from './connect-button.css';
import { useSession } from 'next-auth/react';
/**
 *
 */
export const ConnectButton = (): ReactElement => {
  const { data: session, status } = useSession();
  return (
    <SmallButton>
      <Link href="/auth/connect" passHref key="/auth/connect">
        {status === 'loading' ? (
          <div className={styledConnectButton}>Loading...</div>
        ) : status === 'unauthenticated' ? (
          <div className={styledConnectButton}>
            <p>Connect</p>
            <EnterIcon />
          </div>
        ) : (
          <div className={styledConnectButton}>Avatar</div>
        )}
      </Link>
    </SmallButton>
  );
};
