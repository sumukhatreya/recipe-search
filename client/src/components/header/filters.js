import { useFormik } from 'formik';
import { useEffect } from 'react';

export default function Filters() {
  const formik = useFormik({
    initialValues: {
      minCalories: 0,
      maxCalories: 10000,
      maxIngredients: 100,
      checked: [],
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
    },
  });
  return (
    <div className='w-full max-w-xs'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={formik.handleSubmit}
      >
        <div className='mb-6'>
          <h3 className='text-base font-bold block mb-2'>Calories</h3>
          <label
            className='inline-block text-gray-700 text-sm m-auto'
            htmlFor='minCalories'
          >
            Min
          </label>
          <input
            className='inline-block appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2.5 mr-3'
            id='minCalories'
            name='minCalories'
            value={formik.values.minCalories}
            onChange={formik.handleChange}
            type='text'
            placeholder={formik.values.minCalories}
          />
          <label
            className='inline-block text-gray-700 text-sm m-auto'
            htmlFor='maxCalories'
          >
            Max
          </label>
          <input
            className='inline-block appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2.5'
            id='maxCalories'
            name='maxCalories'
            value={formik.values.maxCalories}
            onChange={formik.handleChange}
            type='text'
            placeholder={formik.values.maxCalories}
          />
        </div>
        <div className='mb-6'>
          <h3 className='text-base font-bold block mb-2'>Ingredients</h3>
          <label
            className='inline-block text-gray-700 text-sm m-auto'
            htmlFor='maxIngredients'
          >
            Max
          </label>
          <input
            className='inline-block appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2.5'
            id='maxIngredients'
            name='maxIngredients'
            value={formik.values.maxIngredients}
            onChange={formik.handleChange}
            type='text'
            placeholder={formik.values.maxIngredients}
          />
        </div>
        <div>
          <div className='form-check'>
            <h3 className='text-base font-bold block mb-2'>Diet</h3>
            <div className='block'>
              <label
                className='form-check-label inline-block text-sm text-gray-700'
                htmlFor='highProtein'
              >
                High protein
              </label>
              <input
                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='highProt'
                id='highProtein'
                name='checked'
                onChange={formik.handleChange}
              />
            </div>
            <div className='block'>
              <label
                className='form-check-label inline-block text-sm text-gray-700'
                htmlFor='highFiber'
              >
                High fiber
              </label>
              <input
                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='highFib'
                id='highFiber'
                name='checked'
                onChange={formik.handleChange}
              />
            </div>
            <div className='block'>
              <label
                className='form-check-label inline-block text-sm text-gray-700'
                htmlFor='vegan'
              >
                Vegan
              </label>
              <input
                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='vegan'
                id='vegan'
                name='checked'
                onChange={formik.handleChange}
              />
            </div>
            <div className='block'>
              <label
                className='form-check-label inline-block text-sm text-gray-700'
                htmlFor='paleo'
              >
                Paleo
              </label>
              <input
                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='paleo'
                id='paleo'
                name='checked'
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className='flex inline-block mt-4 content-center z-50'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
