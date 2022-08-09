import Filters from './filters';

const FilterIcon = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        viewBox='0 0 20 20'
        fill='currentColor'
        zIndex={40}
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
  return (
    <div>
      <div class='relative flex justify-center py-3 px-6 bg-slate-200 border-b'>
        <div class='m-auto border rounded-md overflow-visible h-10'>
          <input placeholder='Search...' class='px-8 py-3 h-full' />
          <button class='float-left bg-slate-300 px-2 h-full hover:bg-slate-500 z-40'>
            <FilterIcon />
          </button>
          <div class='float-bottom'>
            <Filters />
          </div>
        </div>
      </div>
      {/* <div class='relative m-auto flex justify-center'>
        <div class='mr-auto mb-auto ml-auto mt-0 h-full'>
          <Filters />
        </div>
      </div> */}
    </div>
  );
}
