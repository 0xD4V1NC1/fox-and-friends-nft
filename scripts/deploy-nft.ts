import '@nomiclabs/hardhat-ethers';
import {ethers} from 'hardhat';
import fs from 'fs';

async function main() {
  // Here is where we will customize our NFT constructor items for deployment
  const NAME = process.env.REACT_APP_PROJECT_NAME || '';
  const SYMBOL = process.env.REACT_APP_PROJECT_SYMBOL || 'NFT';
  const MINT_COST = process.env.REACT_APP_MINT_COST || 0;
  const MAX_SUPPLY = process.env.REACT_APP_MAX_SUPPLY || 0;
  const MAX_MINT_AMOUNT = process.env.REACT_APP_MAX_MINT_AMOUNT || 1;
  const NFT_MINT_DATE = new Date(process.env.REACT_APP_NFT_MINT_DATE || 0).getTime().toString().slice(0, 10);
  const IPFS_IMAGE_METADATA_URI = `ipfs://${process.env.REACT_APP_IPFS_IMAGE_METADATA_CID}/`;
  const IPFS_HIDDEN_IMAGE_METADATA_URI = `ipfs://${process.env.REACT_APP_IPFS_HIDDEN_IMAGE_METADATA_CID}/hidden.json`;
  console.log('------------------------------------------\n');
  console.log('NFT CONFIG: ');
  console.log('Name: ', NAME);
  console.log('SYMBOL: ', SYMBOL);
  console.log('MINT COST: ', MINT_COST);
  console.log('MAX SUPPLY: ', MAX_SUPPLY);
  console.log('MAX MINT AMOUNT: ', MAX_MINT_AMOUNT);
  console.log('NFT MINT DATE: ', NFT_MINT_DATE);
  console.log('IPFS_IMAGE_METADATA_URI: ', IPFS_IMAGE_METADATA_URI);
  console.log('IPFS_HIDDEN_IMAGE_METADATA_URI: ', IPFS_HIDDEN_IMAGE_METADATA_URI);
  console.log('------------------------------------------');
  // We get the contract to deploy
  console.log('Getting Contract...');
  console.log('------------------------------------------');
  const FrenzyFoxClub = await ethers.getContractFactory('FrenzyFoxClub');
  console.log('Attempting to Deploy Contract...');
  console.log('------------------------------------------');
  const frenzyfoxclub = await FrenzyFoxClub.deploy(
      NAME,
      SYMBOL,
      MINT_COST,
      MAX_SUPPLY,
      MAX_MINT_AMOUNT,
      IPFS_IMAGE_METADATA_URI,
  );

  await frenzyfoxclub.deployed();
  console.log('NFT Smart Contract deployed to: ', frenzyfoxclub.address);
  const frenzyfoxclubInterface = frenzyfoxclub.interface.format('json');

  const contractData = {
    address: frenzyfoxclub.address,
    abi: frenzyfoxclubInterface,
  };

  // helps determine our projects directory
  const base = process.cwd();
  fs.writeFileSync(`${base}/src/frenzy-fox-club.json`, JSON.stringify(contractData));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
