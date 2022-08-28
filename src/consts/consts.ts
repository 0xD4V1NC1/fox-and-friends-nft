// @TODO You will need to update this based on your NFT .json file name... This will likely cause error if it doesn't exist
import nftData from '../frenzy-fox-club.json';
import {ethers} from 'ethers';

// NFT Mint date in milliseconds for the countdown timer
export const NFT_MINT_DATE = new Date(process.env.REACT_APP_NFT_MINT_DATE || '').getTime();
export const ETHEREUM_CHAIN_ID = 1;
export const ROPSTEN_CHAIN_ID = 3;
// export const LOCALHOST_CHAIN_ID = 31337;
export const LOCALHOST_CHAIN_ID = 3;

/*
    if developing locally, let the contract address equal the address generated in the <NFT>.json file...
    otherwise our production address
*/
// @TODO ensure the .env in the root directory is updated with production variables when ready to deploy to mainnet
// and add your production and test address and abi to the two functions below
const getNftAddress = () => {
  const environment = process.env.REACT_APP_NODE_ENV;
  let nftAddress;
  switch (environment) {
    case 'production':
      nftAddress = '';
      break;
    case 'test':
      nftAddress = '';
      break;
    case 'development':
    default:
      nftAddress = nftData.address;
  }
  return nftAddress;
};

const getNftAbi = () => {
  const environment = process.env.REACT_APP_NODE_ENV;
  let nftAbi;
  switch (environment) {
    case 'production':
      nftAbi = '';
      break;
    case 'test':
      nftAbi = '';
      break;
    case 'development':
    default:
      nftAbi = nftData.abi;
  }
  return nftAbi;
};

export const NFT_CONTRACT_ADDRESS = getNftAddress();
export const NFT_ABI = getNftAbi();

export const MAX_MINT_AMOUNT = parseInt(process.env.REACT_APP_MAX_MINT_AMOUNT || '0');
export const MAX_NFT_SUPPLY = parseInt(process.env.REACT_APP_MAX_SUPPLY || '0');

export const NFT_COST = parseFloat(ethers.utils.formatEther(process.env.REACT_APP_MINT_COST || '0'));

export const NFT_IMAGE_CID = process.env.REACT_APP_IPFS_IMAGE_CID;

export const NFT_HIDDEN_IMAGE_CID = process.env.REACT_APP_IPFS_HIDDEN_IMAGE_CID;

export const GRADIENT_TEXT = `text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500`;

const getChainId = () => {
  const environment = process.env.REACT_APP_NODE_ENV;
  let chainId;
  switch (environment) {
    case 'test':
      chainId = ROPSTEN_CHAIN_ID;
      break;
    case 'production':
      chainId = ETHEREUM_CHAIN_ID;
      break;
    case 'development':
    default:
      chainId = LOCALHOST_CHAIN_ID;
  }
  return chainId;
};
export const CHAIN_ID = getChainId();
