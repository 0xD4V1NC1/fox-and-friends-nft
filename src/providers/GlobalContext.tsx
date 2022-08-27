import {createContext, useContext} from 'react';

export type GlobalState = {
    pageTitle: string;
    setPageTitle: (newTitle: string) => void;
    metaDescription: string;
    setMetaDescription: (newMetaDescription: string) => void;
    account: string | undefined;
};

export const GlobalContext = createContext<GlobalState>({
  pageTitle: 'Frenzy Fox Club',
  setPageTitle: () => {/* empty */},
  metaDescription: '',
  setMetaDescription: () => {/* empty */},
  account: '',
});

export const useGlobalContext = () => useContext(GlobalContext);
