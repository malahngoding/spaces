import { EnterIcon, ExitIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';
import { InsteadLocale } from '../../modules/i18n';
import type { ReactElement } from 'react';
import { SmallButton } from '../../components/button/base';
import { signOut } from 'next-auth/react';
import { styledConnectButton } from './connect-button.css';
import { useI18n } from 'next-rosetta';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

/**
 *
 */
export const ConnectButton = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <Fragment>
      {status === 'loading' ? (
        <SmallButton>Loading...</SmallButton>
      ) : status === 'unauthenticated' ? (
        <SmallButton
          onClick={() => {
            router.push(`/auth/connect`);
          }}
        >
          <div className={styledConnectButton}>
            <p>{t(`auth.connect`)}</p>
            <EnterIcon />
          </div>
        </SmallButton>
      ) : (
        <SmallButton
          onClick={() => {
            signOut();
          }}
        >
          <div className={styledConnectButton}>
            <>{t(`navigations.logout`)}</>
            <ExitIcon />
          </div>
        </SmallButton>
      )}
    </Fragment>
  );
};
