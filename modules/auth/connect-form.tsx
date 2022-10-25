/**
 *
 */
import type { ReactElement } from 'react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { styledConnectFormWrapper } from './connect-form.css';
/**
 *
 */
const LazyMetamaskButton = dynamic<{}>(
  (): any =>
    import(`../../modules/auth/metamask-button`).then(
      (mod) => mod.MetamaskButton,
    ),
  {
    ssr: false,
  },
);

export const ConnectForm = (): ReactElement => {
  return (
    <div className={styledConnectFormWrapper}>
      <Suspense fallback={` `}>
        <LazyMetamaskButton />
      </Suspense>
    </div>
  );
};
