import React, {useEffect, useRef, useState} from 'react';

import {useWeb3React} from '@web3-react/core';

import {useGlobalContext} from '../providers/GlobalContext';
import useNftData from '../hooks/useNftData';

import Layout from '../components/Layout/Layout';
import Marquee from '../components/UI/Marquee';
import MintSection from '../components/PageComponents/Home/MintSection';
import SoldOutSection from '../components/PageComponents/Home/SoldOutSection';
import IntroSection from '../components/PageComponents/Home/IntroSection';
import {useNftOwnerContext} from '../providers/NftOwnerContext';

const Home = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const mintSectionRef = useRef<null | HTMLDivElement>(null);
  const {isActive} = useWeb3React();

  // had race condition b/c of signer not being initialized when useNFTData was called... but signer as dependency caused infinite loop...
  const {nftCost, maxNftSupply, currentNftId, isNftDataLoading} = useNftData();
  const {availableMints} = useNftOwnerContext();
  const [isSoldOut, setIsSoldOut] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageTitle('Home | Fox and Friends');
    setMetaDescription('Home of Fox and Friends NFT. Mint your NFT here and learn more about our project');
    if (!isNftDataLoading && currentNftId >= maxNftSupply) {
      setIsSoldOut(true);
    }
  }, [currentNftId]);

  const handleScrollToMintSection = () => {
    if (mintSectionRef && mintSectionRef.current) {
      mintSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout>
      <Marquee marqueeText="Minting August 1st ·" reverse />
      <IntroSection handleScrollToMintSection={handleScrollToMintSection} isSoldOut={isSoldOut} />
      {isSoldOut ? <SoldOutSection /> : <MintSection mintSectionRef={mintSectionRef} nftCost={nftCost} isAccountConnected={isActive} maxAmount={maxNftSupply} currentNftId={currentNftId} availableMints={availableMints} />}
    </Layout>
  );
};

export default Home;
