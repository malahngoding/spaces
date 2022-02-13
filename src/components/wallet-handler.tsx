import { useEffect, useState } from 'react';
import { CryptoCard } from '@components/cards/crypto-card';
import { ethers } from 'ethers';

import MalahNgodingToken from '@artifacts/contracts/MalahNgodingToken.sol/MalahNgodingToken.json';

import { Box } from '@components/design/box';
import { Button } from '@components/design/button';
import {
  deployedChain,
  MalahNgodingTokenAddress,
  MalahNgodingTokenDecimals,
  MalahNgodingTokenSymbol,
} from '@config/contractAddress';

export const WalletHandler = () => {
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const [currentBalance, setCurrentBalance] = useState<string>('');
  const [currentGasBalance, setCurrentGasBalance] = useState<string>('');

  async function requestAccount() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      const signer = provider.getSigner();

      if (network.chainId === deployedChain) {
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
          params: [],
        });
        const balance = await provider.getBalance(account[0]);
        const contract = new ethers.Contract(
          MalahNgodingTokenAddress,
          MalahNgodingToken.abi,
          signer,
        );
        const tx = await contract.balanceOf(account[0]);

        setCurrentBalance(
          `${ethers.utils.formatEther(tx).split('.')[0]}.${ethers.utils
            .formatEther(tx)
            .split('.')[1]
            .substring(0, 4)}`,
        );
        setCurrentAccount(account[0]);
        setCurrentGasBalance(
          `${ethers.utils.formatEther(balance).split('.')[0]}.${ethers.utils
            .formatEther(balance)
            .split('.')[1]
            .substring(0, 4)}`,
        );
      } else {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }],
        });
        setCurrentAccount('...');
        setCurrentGasBalance('...');
      }
    }
  }

  async function signMessage() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let mySignature = await signer.signMessage('Sign');
      if (mySignature) {
        console.log(mySignature);
      } else {
        console.log('Rejected');
      }
    }
  }

  async function registerMalahNgodingToken() {
    if (typeof window.ethereum !== undefined) {
      const tokenAddress = MalahNgodingTokenAddress;
      const tokenSymbol = MalahNgodingTokenSymbol;
      const tokenDecimals = MalahNgodingTokenDecimals;
      const tokenImage =
        'https://malahngoding.com/static/favicons/apple-touch-icon.png';

      try {
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage,
            },
          },
        });

        if (wasAdded) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    requestAccount();
  }, [currentAccount, currentGasBalance]);

  return (
    <>
      <CryptoCard
        mnt={`${currentBalance} $MNT`}
        gas={`${currentGasBalance} $mumbaiMATIC`}
        currentAddress={currentAccount}
        description="Malah Ngoding Token"
        image="https://storage.opensea.io/files/70db9e857f52b78b7a9f6d93020e50d8.mp4"
      />
      <Box css={{ display: `flex`, flexDirection: `row` }}>
        <Button
          alternative="tertiary"
          onClick={() => registerMalahNgodingToken()}
        >
          Register MNT
        </Button>
        <Button
          alternative="tertiary"
          onClick={() => signMessage()}
          css={{ marginLeft: `$xs`, display: `none` }}
        >
          Sign
        </Button>
      </Box>
    </>
  );
};
