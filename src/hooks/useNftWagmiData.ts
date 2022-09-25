import {useState, useEffect} from 'react';
import {useContractReads} from 'wagmi';
import {ethers} from 'ethers';

import {NFT_CONTRACT_ADDRESS, NFT_ABI, MAX_NFT_SUPPLY, NFT_COST} from '../consts/consts';


const convertCost = (data: any) => {
  const costInWei = data && data[0]?.toString();
  // cost is returned as a bigNumber... to convert it we need to turn it into a string for formatEther then convert it to a number
  const costInEther = costInWei && parseFloat(ethers.utils.formatEther(costInWei));
  return costInEther;
};

const convertCurrentNftId = (data: any)=> {
  return parseInt(data && data[1]?.toString());
};

const convertSupply = (data: any) => {
  return data && data[2]?.toNumber();
};
const FrenzyFoxContract = {
  addressOrName: NFT_CONTRACT_ADDRESS,
  contractInterface: NFT_ABI,
};
const useNftWagmiData = () => {
  const [nftCost, setNftCost] = useState<number>(NFT_COST);
  const [currentNftId, setCurrentNftId] = useState<number>(0);
  const [maxNftSupply, setMaxNftSupply] = useState<number>(MAX_NFT_SUPPLY);

  const {data, isError, isLoading} = useContractReads({
    contracts: [
      {
        ...FrenzyFoxContract,
        // nft cost
        functionName: 'cost',
      },
      {
        ...FrenzyFoxContract,
        // current NFT ID
        functionName: 'totalSupply',
      },
      {
        ...FrenzyFoxContract,
        // max NFT supply
        functionName: 'maxSupply',
      },
      {
        ...FrenzyFoxContract,
        // max mint amount
        functionName: 'maxMintAmount',
      },

    ],
  });
  useEffect(() => {
    const cost = convertCost(data) || NFT_COST;
    setNftCost(cost);

    const currentId = convertCurrentNftId(data) || 0;
    setCurrentNftId(currentId);

    const supply = convertSupply(data) || MAX_NFT_SUPPLY;
    setMaxNftSupply(supply);
  }, [data]);
  return {maxNftSupply, currentNftId, nftCost, isLoading, isError};
};
export default useNftWagmiData;
