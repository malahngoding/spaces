import { useEffect, useState } from 'react';
import { CryptoCard } from '@components/crypto-card';
import { ethers } from 'ethers';

import NFT from '@artifacts/contracts/NFT.sol/NFT.json';
import NFTMarket from '@artifacts/contracts/NFTMarket.sol/NFTMarket.json';
import MalahNgodingToken from '@artifacts/contracts/MalahNgodingToken.sol/MalahNgodingToken.json';

import { Box } from '@components/design/box';
import { Button } from '@components/design/button';

const NFTAddress = `0x8e8865F086917D0e380e053ceCc46Cb45B014ae0`;
const NFTMarketAddress = `0x67d6F27964a27d3a739A1C53EE02070F56F66180`;
const MalahNgodingTokenAddress = `0xA888133886ADE7df0E95f7cFdd74e35f79DC30CE`;

export const WalletHandler = () => {
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const [currentBalance, setCurrentBalance] = useState<string>('');
  const [currentGasBalance, setCurrentGasBalance] = useState<string>('');

  async function requestAccount() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      const signer = provider.getSigner();

      if (network.chainId === 4) {
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
          params: [{ chainId: '0x4' }],
        });
        setCurrentAccount('...');
        setCurrentGasBalance('...');
      }
    }
  }

  // NFT
  async function createToken(url: string) {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(NFTAddress, NFT.abi, signer);
      const tx = await contract.createToken(url);
      await tx.wait();
      console.log(tx);
    }
  }

  // NFT Market
  async function createMarketSale(url: string) {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Token
      const contractNFT = new ethers.Contract(NFTAddress, NFT.abi, signer);
      const txNFT = await contractNFT.createToken(url);
      await txNFT.wait();
      let event = txNFT.events[0];
      let value = event.args[2];
      let tokenId = value.toNumber();

      const price = ethers.utils.parseUnits('10', 'ether');

      // List
      const contractNFTMarket = new ethers.Contract(
        NFTMarketAddress,
        NFTMarket.abi,
        signer,
      );
      const txNFTMarket = await contractNFTMarket.createMarketSale(
        `0x8e8865f086917d0e380e053cecc46cb45b014ae0`,
        1,
      );
    }
  }

  async function getListingPrice() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFTMarketAddress,
        NFTMarket.abi,
        signer,
      );
      const tx = await contract.getListingPrice();
      console.log(ethers.utils.formatEther(tx));
    }
  }

  async function fetchMarketItems() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFTMarketAddress,
        NFTMarket.abi,
        signer,
      );
      const tx = await contract.fetchMarketItems();
      console.log(tx);
    }
  }

  async function fetchMyNFTs() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFTMarketAddress,
        NFTMarket.abi,
        signer,
      );
      const tx = await contract.fetchMyNFTs();
      console.log(tx);
    }
  }

  async function fetchItemsCreated() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFTMarketAddress,
        NFTMarket.abi,
        signer,
      );
      const tx = await contract.fetchItemsCreated();
      console.log(tx);
    }
  }

  async function signMessage() {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let mySignature = await signer.signMessage('Some custom message');
      console.log(mySignature);
    }
  }

  async function registerMalahNgodingToken() {
    if (typeof window.ethereum !== undefined) {
      const tokenAddress = '0xA888133886ADE7df0E95f7cFdd74e35f79DC30CE';
      const tokenSymbol = 'MNT';
      const tokenDecimals = 18;
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
        gas={`${currentGasBalance} $rinkebyETH`}
        currentAddress={currentAccount}
        description="Malah Ngoding Token"
        image="https://storage.opensea.io/files/70db9e857f52b78b7a9f6d93020e50d8.mp4#t=0.001"
      />
      <Button
        alternative="tertiary"
        onClick={() => registerMalahNgodingToken()}
      >
        Register MNT
      </Button>

      <Box css={{ display: `none` }}>
        <p>{currentAccount}</p>
        <button onClick={() => createToken('https://malahngoding.com')}>
          createToken
        </button>
        <br />
        <button onClick={() => getListingPrice()}>getListingPrice</button>
        <br />
        <button onClick={() => createMarketSale('https://malahngoding.com')}>
          createMarketSale
        </button>
        <br />
        <button onClick={() => fetchMarketItems()}>fetchMarketItems</button>
        <br />
        <button onClick={() => fetchMyNFTs()}>fetchMyNFTs</button>
        <br />
        <button onClick={() => fetchItemsCreated()}>fetchItemsCreated</button>
        <br />
        <button onClick={() => signMessage()}>signMessage</button>
      </Box>
    </>
  );
};
