import Image from 'next/image';
import { HashConnect, HashConnectTypes } from 'hashconnect';
import { useEffect, useState } from 'react';

import { Button } from '@components/design/button';
import { Box } from './design/box';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './design/alert';
import { InputText } from './design/input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const HashpackAuth = (): JSX.Element => {
  const router = useRouter();
  const [signingString, setSigningString] = useState<string>('');
  const hashconnect = new HashConnect();

  let appMetadata: HashConnectTypes.AppMetadata = {
    name: 'Malah Ngoding',
    description: 'Malah Ngoding Spaces',
    icon: 'https://bafkreicuwmjjhagi5mvpt4brexhk6ggansqkyfj6vbqct2ri7cqn7mymfa.ipfs.nftstorage.link/',
  };

  const handleWallet = async (): Promise<void> => {
    await hashconnect.init(appMetadata);
    let state = await hashconnect.connect();
    let pairingString = hashconnect.generatePairingString(
      state,
      'testnet',
      false,
    );
    setSigningString(pairingString);
    hashconnect.findLocalWallets();
    hashconnect.connectToLocalWallet(pairingString);
  };

  useEffect(() => {
    const signInHandler = async (
      account: string,
      signature: string,
    ): Promise<void> => {
      let response = await signIn('credentials', {
        address: account,
        signature: signature,
        network: 'hedera',
        redirect: false,
      });

      if (response) {
        router.push('/');
      }
    };

    const foundExtensionEventHandler = (data: any) => {
      // Do a thing
    };

    const pairingEventHandler = (data: any) => {
      const account = data?.accountIds[0] as string;
      const signature = data?.metadata?.publicKey as string;
      signInHandler(account, signature);
    };
    hashconnect.foundExtensionEvent.on(foundExtensionEventHandler);
    hashconnect.pairingEvent.on(pairingEventHandler);

    return () => {
      hashconnect.foundExtensionEvent.off(foundExtensionEventHandler);
      hashconnect.pairingEvent.off(pairingEventHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
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
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>HashConnect String</AlertDialogTitle>
          <AlertDialogDescription>
            <InputText value={signingString} readOnly />
          </AlertDialogDescription>
          <Box css={{ display: 'flex', justifyContent: 'flex-end' }}>
            <AlertDialogCancel asChild>
              <Button alternative="secondary" css={{ marginRight: 25 }}>
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild style={{ display: `none` }}>
              <Button type="submit" onClick={() => {}}>
                Accept
              </Button>
            </AlertDialogAction>
          </Box>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
