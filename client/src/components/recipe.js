import { useNavigate } from 'react-router-dom';

export default function Recipe({ imageUrl, title, uri }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const recipeId = uri.split('_')[1];
    navigate(`/:${recipeId}`);
  };

  return (
    <div className='flex justify-around'>
      <div className='rounded-lg shadow-lg bg-blue-100 max-w-sm'>
        <img className='rounded-t-lg' src={imageUrl} alt='Image unavailable' />
        <div className='p-3'>
          <h5 className='text-gray-600 text-lg font-medium mb-2'>{title}</h5>
          <button
            type='button'
            className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={handleClick}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
