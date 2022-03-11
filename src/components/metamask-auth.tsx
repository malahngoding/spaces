import { ethers } from 'ethers';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

import { Button } from '@components/design/button';
import { deployedChain } from '@config/contractAddress';
import { ApplicationUrl } from '@config/application';

export const MetamaskAuth = (): JSX.Element => {
  const handleWallet = async (): Promise<void> => {
    console.log('Start');
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (network.chainId === deployedChain) {
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
          params: [],
        });
        const message = [
          `I have read and accept the terms and condition`,
          `for this website ${ApplicationUrl}`,
          `Please sign me in!`,
        ].join('\n');

        const signatureMessage = await provider
          .getSigner(account[0])
          .signMessage(message);

        const nextstep = await signIn('credentials', {
          address: account[0],
          signature: signatureMessage,
          redirect: false,
        });

        console.log({ nextstep });
      } else {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }],
        });
      }
    }
  };

  return (
    <>
      <Button
        alternative="secondary"
        onClick={handleWallet}
        className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
      >
        <Image
          src="/static/wallets/metamask.webp"
          width="32"
          height="32"
          alt="Metamask Connect"
        />
      </Button>
    </>
  );
};
