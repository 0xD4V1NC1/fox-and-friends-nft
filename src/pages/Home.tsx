import React, {useEffect, useRef, useState} from 'react';
import {useAccount} from 'wagmi';

import {useGlobalContext} from '../providers/GlobalContext';
import useNftWagmiData from '../hooks/useNftWagmiData';
import Layout from '../components/Layout/Layout';
import MintSection from '../components/PageComponents/Home/MintSection';
import SoldOutSection from '../components/PageComponents/Home/SoldOutSection';
import IntroSection from '../components/PageComponents/Home/IntroSection';
import {MAX_NFT_SUPPLY} from '../consts/consts';

const Home = () => {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [availableMints, setAvailableMints] = useState(MAX_NFT_SUPPLY);
  const mintSectionRef = useRef<null | HTMLDivElement>(null);

  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const {address} = useAccount();
  const {maxNftSupply, currentNftId, nftCost, isLoading: isNftDataLoading} = useNftWagmiData();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageTitle('Home | Frenzy Fox Club');
    setMetaDescription('Home of Frenzy Fox Club NFT. Mint your NFT here and learn more about our project');
    if (!isNftDataLoading && currentNftId >= maxNftSupply) {
      setIsSoldOut(true);
    }
    setAvailableMints(MAX_NFT_SUPPLY - currentNftId);
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
      <IntroSection handleScrollToMintSection={handleScrollToMintSection} isSoldOut={isSoldOut} />
      {isSoldOut ? <SoldOutSection /> : <MintSection mintSectionRef={mintSectionRef} nftCost={nftCost} isAccountConnected={!!address} maxAmount={maxNftSupply} currentNftId={currentNftId} availableMints={availableMints} />}
    </Layout>
  );
};

export default Home;
