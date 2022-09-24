import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'; // allows for routing in our app
import {useWeb3React} from '@web3-react/core';

/* allows us to update the <head> element of our app needed to
 dynamically change things such as page title */
import {Helmet} from 'react-helmet';

// import Application Routes to App.js to keep file structure cleaner
import AppRoutes from './AppRoutes';
import {GlobalContext} from './providers/GlobalContext';
import {ToastProvider} from './providers/ToastContext';
import useCachedConnector from './hooks/useCachedConnector';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';

const {chains, provider} = configureChains(
    [chain.goerli],
    [
      alchemyProvider({apiKey: '0FGvbuc4wYTxfNi-gFDj4XGCOpGR2Wgn'}),
      publicProvider(),
    ],
);
const {connectors} = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = () => {
  const [pageTitle, setPageTitle]= useState<string>('');
  const [metaDescription, setMetaDescription]= useState<string>('');
  const {account} = useWeb3React();
  const {lastKnownConnector} = useCachedConnector();

  useEffect(() => {
    // this is what attempts to keep wallet connection when returning to the site
    lastKnownConnector?.connectEagerly?.();
  }, [lastKnownConnector]);

  return (
    <BrowserRouter>
      {/* @ts-ignore upgraded helmet types... waiting for react-helmet to upgrade... issue comes in with react 18 upgrade */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`${metaDescription || 'Frenzy Fox Club NFT project'}`} />
      </Helmet>

      <GlobalContext.Provider value={{pageTitle, setPageTitle, metaDescription, setMetaDescription, account}}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <ToastProvider>
              <div className="app font-concertOne" style={{backgroundImage: `url("/forest.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100vw', backgroundAttachment: 'fixed',


              }}>
                <AppRoutes/>
              </div>
            </ToastProvider>
          </RainbowKitProvider >
        </WagmiConfig >

      </GlobalContext.Provider>
    </BrowserRouter>

  );
};

export default App;
