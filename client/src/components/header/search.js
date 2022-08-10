import { useState, useEffect, useRef } from 'react';
import Filters from './filters';
import axios from 'axios';

const FilterIcon = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
        zindex={30}
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

export default function SearchBar({ updateRecipes }) {
  const searchFilter = useRef('');
  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSubmit = async () => {
    try {
      console.log('Submitting', searchText);
      console.log('Search filter string', searchFilter.current);
      let searchQuery = `q=${searchText.trim()}`;
      searchQuery +=
        searchFilter.current === '' ? '' : `&${searchFilter.current}`;
      const res = await axios.get(
        `http://localhost:5000/search?${searchQuery}`
      );
      console.log(res.data);
      updateRecipes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const listener = async (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        console.log('Inside event listener', searchFilter.current);
        await handleSubmit();
      }
    };
    document.addEventListener('keyup', listener);
    return () => document.removeEventListener('keyup', listener);
  }, [handleSubmit]);

  const toggleFilterMenu = () => {
    setShowMenu(!showMenu);
  };

  const applySearchFilters = (filterString) => {
    console.log('In the apply search filters function', filterString);
    // setSearchFilters(filterString);
    searchFilter.current = filterString;
    console.log('Applying search filters', searchFilter.current);
  };

  return (
    <div>
      <div className='relative flex justify-center py-3 px-6 bg-slate-200 border-b'>
        <div className='m-auto border rounded-md overflow-visible h-10'>
          <input
            placeholder='Search...'
            value={searchText}
            className='px-11 py-3 h-full'
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className='float-left bg-slate-300 px-2 h-full hover:bg-slate-500 z-30'
            onClick={toggleFilterMenu}
          >
            <FilterIcon />
          </button>
          {showMenu && (
            <div className='float-bottom z-40'>
              <Filters
                applyFilters={(filterString) => {
                  applySearchFilters(filterString);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
