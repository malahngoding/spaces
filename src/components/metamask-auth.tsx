/* 3rd Party Modules Import */
import { ethers } from 'ethers';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
/* Internal Modules Import */
import { Button } from '@components/design/button';
import { deployedChain } from '@config/contractAddress';
import { ApplicationUrl } from '@config/application';
import { useAuthLoading } from '@store/auth-loading-store';
import { callbackUrlHandler } from '@utils/urlHandler';
/* Types Import */
/**
 * Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
export const MetamaskAuth = (): JSX.Element => {
  const toggleLoading = useAuthLoading((state) => state.toggleLoading);

  const router = useRouter();

  const handleWallet = async (): Promise<void> => {
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
          `for this website ${ApplicationUrl}`,
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
          callbackUrl: `${callbackUrlHandler(
            router.query.callBackUrl as string,
          )}`,
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
/**
 * Internal Component Declaration
 * @private
 */
