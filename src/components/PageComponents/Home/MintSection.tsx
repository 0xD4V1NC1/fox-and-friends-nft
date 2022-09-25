import React, {useState, RefObject, useEffect} from 'react';
import {ethers} from 'ethers';
import {useContractWrite, usePrepareContractWrite, useAccount, useBalance} from 'wagmi';

import Button from '../../UI/Button';
import Image from '../../UI/Image';

// use https://codechi.com/dev-tools/date-to-millisecond-calculators/ to calculate future date in milliseconds
// import {NFT_MINT_DATE} from '../../../consts/consts';

import {useToastContext} from '../../../providers/ToastContext';
import {NFT_ABI, NFT_CONTRACT_ADDRESS} from '../../../consts/consts';
import Loading from '../../UI/Loading';


const MintSection = ({
  mintSectionRef,
  nftCost,
  isAccountConnected,
  maxAmount,
  currentNftId,
  availableMints,
}: {
  mintSectionRef: RefObject<HTMLDivElement>;
  nftCost: number;
  isAccountConnected: boolean;
  maxAmount: number;
  currentNftId: number;
  availableMints: number;
}) => {
  const {address} = useAccount();
  const {data: balance, isLoading: isLoadingBalance} = useBalance({
    addressOrName: address,
  });
  const [mintAmount, setMintAmount] = useState<number>(1);
  const {addToast} = useToastContext();


  useEffect(() => {
    if (availableMints === 0) setMintAmount(0);
  }, [availableMints]);

  const handleIncrement = () => {
    if (mintAmount >= availableMints) return;
    const incrementedAmount = mintAmount + 1;
    setMintAmount(incrementedAmount);
  };

  const handleDecrement = () => {
    // doesn't make sense to let the user to set it to 0
    if (mintAmount <= 1) return;
    const decrementedAmount = mintAmount - 1;
    setMintAmount(decrementedAmount);
  };

  const validateKeyPress = (e: any) => {
    const some = Number(e.key).toString();
    const validKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleDecrement();
    } else if (!/^[0-9]\d*$/.test(some) && validKeys.indexOf(e.key) === -1) {
      e.preventDefault();
    }
  };

  const decrementAriaLabel = mintAmount > 0 ? mintAmount - 1 : 0;
  const totalCost = (nftCost * mintAmount);
  const formattedTotalCost = totalCost.toFixed(2);

  const {config} = usePrepareContractWrite({
    addressOrName: NFT_CONTRACT_ADDRESS,
    contractInterface: NFT_ABI,
    functionName: 'mint',
    args: [mintAmount, {
      value: ethers.utils.parseEther((nftCost * mintAmount).toString()),
    }],
  });
  const {isLoading, write} = useContractWrite({
    ...config,
    onSuccess(data) {
      addToast({toastType: 'success', toastHeader: 'Mint Successful!', toastMessage: `Go to opensea to see your NFT`});
    },
    onError(error) {
      addToast({toastType: 'error', toastHeader: 'Error Minting NFT', toastMessage: `Please make sure you have sufficient funds and are connected to the right network`});
    },
  });
  if (isLoadingBalance) return <Loading message="Loading..." />;
  return (
    <section
      id="mint-section"
      ref={mintSectionRef}
      className="min-h-screen px-16 py-8 m-auto scroll-mt-8"
    >
      <div className="flex flex-col justify-center md:flex-row md:items-end sm:gap-24 lg:gap-36 w-full">
        <div className="flex flex-col">
          <h2 className="mb-12 text-6xl lg:text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500">
            Frenzy Fox Club
          </h2>
          <Image
            src="/fox.png"
            size="w-full h-full md:w-80 md:h-96"
            marginBottom="mb-0"
            className="rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mt-8 md:mt-0 flex flex-col text-center font-black text-4xl md:text-6xl lg:text-7xl dark:text-white overflow-hidden">
            {isAccountConnected ? <span className="text-5xl text-primary-400"> {currentNftId} / {maxAmount} Minted </span> : null}
          </h2>
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#f5f5f5] dark:bg-primary-dark-400 text-black dark:text-white p-6 py-12 mt-12">
            {isAccountConnected ? (
              <div className="h-48 flex flex-col justify-center items-center">
                <h3 className='mb-4 text-2xl font-semibold'>Mint Cost: {formattedTotalCost} Ξ</h3>
                {parseFloat(balance?.formatted || '') < parseFloat(formattedTotalCost) ? <p className="text-red-700">Insufficient Funds</p>: null}
                <div className="flex justify-center items-center pb-4">
                  <button className='pr-4 text-5xl hover:text-primary-500' onClick={()=> handleDecrement()} aria-label={`Click to Decrement to ${decrementAriaLabel} NFTs`}>-</button>
                  <input
                    type="number"
                    className={`mb-0 box-content border-none text-black text-center p-4 w-1/2`}
                    onKeyDown={(e) => validateKeyPress(e)}
                    onChange={(e) => {
                      if (parseInt(e.target.value) < 4 && parseInt(e.target.value) > 0) {
                        setMintAmount(parseInt(e.target.value));
                      }
                    }}
                    value={mintAmount}
                    aria-required
                  />
                  <button className='pl-4 text-5xl hover:text-primary-500' onClick={()=> handleIncrement()} aria-label={`Click to Increment to ${mintAmount + 1} NFTs`}>+</button>

                </div>
                <Button
                  type="button"
                  ariaLabel="Click to Mint an NFT"
                  color="primary-gradient"
                  className="font-semibold px-[5.5rem] py-4"
                  text="MINT"
                  onClick={() => write?.()}
                  loading={isLoading}
                />
                {/* <>{error?.message && addToast({toastType: 'error', toastHeader: 'Error', toastMessage: `Error: ${error.message}`})}</> */}
              </div>

            ) : (
              <div className="h-36 md:h-48 flex justify-center items-center text-center">
                <h3 className="text-4xl font-semibold">
                  {' '}
                  Please connect your wallet to mint NFT
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MintSection;
