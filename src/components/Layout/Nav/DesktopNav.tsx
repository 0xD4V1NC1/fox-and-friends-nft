import React from 'react';
import AccountButton from '../../Components/AccountButton';

const DesktopNav = () => {
  return (
    <div className='hidden md:flex md:justify-between md:items-center'>
      <div className='flex items-center md:py-2 md:px-4'>
        <h2 className='ml-4 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500'>Frenzy Fox Club </h2>
      </div>
      <div className='mx-4 my-2 flex items-center'>
        <AccountButton />
      </div>
    </div>
  );
};
export default DesktopNav;
