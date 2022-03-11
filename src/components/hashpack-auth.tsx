import Image from 'next/image';
import { HashConnect, HashConnectTypes } from 'hashconnect';
import { useEffect } from 'react';

import { Button } from '@components/design/button';

export const HashpackAuth = (): JSX.Element => {
  const hashconnect = new HashConnect(true);
  let appMetadata: HashConnectTypes.AppMetadata = {
    name: 'dApp Example',
    description: 'An example hedera dApp',
    icon: 'https://absolute.url/to/icon.png',
  };

  const handleWallet = async (): Promise<void> => {
    let initData = await hashconnect.init(appMetadata);
    let privateKey = initData.privKey;
    let state = await hashconnect.connect();
    let topic = state.topic;
    let pairingString = hashconnect.generatePairingString(
      state,
      'testnet',
      false,
    );
    hashconnect.findLocalWallets();
    hashconnect.connectToLocalWallet(pairingString);
  };

  useEffect(() => {
    const additionalAccountResponseEventHandler = (data: any) => {
      console.log('additionalAccountResponseEvent', data);
      // Do a thing
    };

    const foundExtensionEventHandler = (data: any) => {
      console.log('foundExtensionEvent', data);
      // Do a thing
    };

    const pairingEventHandler = (data: any) => {
      console.log('pairingEvent', data);
      // Do a thing
    };

    hashconnect.additionalAccountResponseEvent.on(
      additionalAccountResponseEventHandler,
    );
    hashconnect.foundExtensionEvent.on(foundExtensionEventHandler);
    hashconnect.pairingEvent.on(pairingEventHandler);

    return () => {
      hashconnect.additionalAccountResponseEvent.off(
        additionalAccountResponseEventHandler,
      );
      hashconnect.foundExtensionEvent.off(foundExtensionEventHandler);
      hashconnect.pairingEvent.off(pairingEventHandler);
    };
  }, []);
  return (
    <>
      <Button
        alternative="secondary"
        onClick={handleWallet}
        className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
      >
        <Image
          src="/static/wallets/hashpack.webp"
          width="32"
          height="32"
          alt="Hashpack Connect"
        />
      </Button>
    </>
  );
};
