import React from 'react';

import AccountButton from '../../Components/AccountButton';
import DarkModeToggle from '../../Components/DarkModeToggle';

const MobileNav = () => {
  return (
    <>
      <div id="mobile-nav-header" className='flex justify-between px-8 py-2 md:hidden'>
        <DarkModeToggle />
        <AccountButton />
      </div>
    </>
  );
};
export default MobileNav;
