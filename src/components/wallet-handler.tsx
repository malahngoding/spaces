import { useEffect, useState } from 'react';
import { CryptoCard } from '@components/crypto-card';
import { BigNumber, ethers, providers } from 'ethers';

import NFT from '@artifacts/contracts/NFT.sol/NFT.json';
import NFTMarket from '@artifacts/contracts/NFTMarket.sol/NFTMarket.json';
import { Box } from './design/box';

const NFTAddress = `0x8e8865F086917D0e380e053ceCc46Cb45B014ae0`;
const NFTMarketAddress = `0x67d6F27964a27d3a739A1C53EE02070F56F66180`;

export const WalletHandler = () => {
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const [currentBalance, setCurrentBalance] = useState<string>('');

  // Metamask
  async function requestAccount() {
    if (typeof window.ethereum !== undefined) {
      const account = await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: [],
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account[0]);
      setCurrentAccount(account[0]);
      setCurrentBalance(ethers.utils.formatEther(balance));
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

  useEffect(() => {
    requestAccount();
  }, []);

  return (
    <>
      <CryptoCard
        title={`${currentBalance.slice(0, 6)} $MNT`}
        currentAddress={currentAccount}
        description="Malah Ngoding Token"
        image="https://storage.opensea.io/files/70db9e857f52b78b7a9f6d93020e50d8.mp4#t=0.001"
      />
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
      </Box>
    </>
  );
};
