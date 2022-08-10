import { useState } from 'react';
import Filters from './filters';

const FilterIcon = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
        zindex={40}
      >
        <path
          fillRule='evenodd'
          d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
};

export default function SearchBar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleFilterMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className='relative flex justify-center py-3 px-6 bg-slate-200 border-b'>
        <div className='m-auto border rounded-md overflow-visible h-10'>
          <input placeholder='Search...' className='px-11 py-3 h-full' />
          <button
            className='float-left bg-slate-300 px-2 h-full hover:bg-slate-500 z-30'
            onClick={toggleFilterMenu}
          >
            <FilterIcon />
          </button>
          {showMenu && (
            <div className='float-bottom z-40'>
              <Filters />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
