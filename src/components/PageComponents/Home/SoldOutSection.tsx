import React from 'react';
import Image from '../../UI/Image';
import Button from '../../UI/Button';
import useOpenSeaURL from '../../../hooks/useOpenSeaURL';
import config from '../../../config.json';
import {MAX_NFT_SUPPLY} from '../../../consts/consts';

const SoldOutSection = () => {
  const {openseaURL} = useOpenSeaURL();

  return (
    <section className='min-h-screen bg-white dark:bg-primary-dark-500 px-16 py-8 m-auto'>
      <div className='flex flex-col justify-center md:flex-row md:items-end md:gap-48 w-full'>
        <div className='flex flex-col'>
          <h2 className='mb-12 text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500'>Frenzy Fox Club</h2>
          <Image src='/fox.png' size="w-full h-full md:w-80 md:h-96"
            marginBottom='mb-0' className='rounded-3xl'/>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='mt-8 md:mt-0 flex flex-col text-center text-5xl font-black md:text-8xl'>
            <span className='text-black dark:text-white'> {MAX_NFT_SUPPLY} / {MAX_NFT_SUPPLY} </span>
            <span className='text-5xl text-primary-400'> Minted </span>
          </h2>
          <div className='relative w-full overflow-hidden rounded-3xl bg-primary-400 p-6 py-12 mt-12' >
            <div className='h-36 md:h-48'>
              <div className='absolute inset-0 z-10 flex w-full items-center justify-center bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url('/sold-out.svg')`}}>
                <Button type="button" ariaLabel='Click to view collection on opensea' href={`${openseaURL}/collection/${config.PROJECT_NAME}`} color="primary-gradient" className='text-sm py-2 px-6 uppercase font-bold md:text-xl' text='Shop on Opensea' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SoldOutSection;
