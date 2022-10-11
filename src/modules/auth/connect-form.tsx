/**
 *
 */
import { deployedChain, publicApplicationUrl } from '@config/application';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { SmallButton } from '@components/button/base';
import { ethers } from 'ethers';
import { signIn } from 'next-auth/react';
import { styledConnectFormWrapper } from './connect-form.css';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    ethereum: any;
    TradingView: any;
  }
}

export const ConnectForm = (): ReactElement => {
  const router = useRouter();

  const toggleLoading = () => console.log(`loading`);

  const metamaskHandler = async (): Promise<void> => {
    toggleLoading();
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      // Starting Metamask Signing Method
      const metamaskSigning = async () => {
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
          params: [],
        });
        const message = [
          `I have read and accept the terms and condition`,
          `for this website ${publicApplicationUrl}`,
          `Please sign me in!`,
        ].join('\n');

        const signatureMessage = await provider
          .getSigner(account[0])
          .signMessage(message);

        let response = await signIn('credentials', {
          address: account[0],
          signature: signatureMessage,
          network: 'evm',
          redirect: true,
          callbackUrl: router.query.callBackUrl as string,
        });
        if (response) {
          router.push('/');
        }
      };
      // End of Metamask Signing Method
      if (network.chainId === deployedChain) {
        await metamaskSigning().catch((error) => {
          if (error.code === 4001) {
            toggleLoading();
          }
        });
      } else {
        await window.ethereum.request({
          id: 1,
          jsonrpc: '2.0',
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x13881',
              rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
              chainName: 'Polygon Testnet Mumbai',
              nativeCurrency: {
                name: 'tMATIC',
                symbol: 'tMATIC',
                decimals: 18,
              },
              blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
            },
          ],
        });
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }],
        });
        await metamaskSigning().catch((error) => {
          if (error.code === 4001) {
            toggleLoading();
          }
        });
      }
    }
  };
  return (
    <div className={styledConnectFormWrapper}>
      <SmallButton onClick={metamaskHandler}>
        <Image
          src="/static/wallets/metamask.webp"
          width="32"
          height="32"
          alt="Metamask Connect"
        />
      </SmallButton>
    </div>
  );
};
