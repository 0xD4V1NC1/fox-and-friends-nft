// this is used for contract verification via hardhat
// npx hardhat verify --network <YOUR_NETWORK>  --constructor-args contract-arguments.js <YOUR_CONTRACT_ADDRESS>
const NAME = process.env.REACT_APP_PROJECT_NAME || '';
const SYMBOL = process.env.REACT_APP_PROJECT_SYMBOL || 'NFT';
const MINT_COST = process.env.REACT_APP_MINT_COST || 0;
const MAX_SUPPLY = process.env.REACT_APP_MAX_SUPPLY || 0;
const MAX_MINT_AMOUNT = process.env.REACT_APP_MAX_MINT_AMOUNT || 1;
const IPFS_IMAGE_METADATA_URI = `ipfs://${process.env.REACT_APP_IPFS_IMAGE_METADATA_CID}/`;

module.exports = [
  NAME,
  SYMBOL,
  MINT_COST,
  MAX_SUPPLY,
  MAX_MINT_AMOUNT,
  IPFS_IMAGE_METADATA_URI,
];
