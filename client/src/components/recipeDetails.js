import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RecipeDetails() {
  let { recipeId } = useParams();
  recipeId = recipeId.substring(1);
  const [recipeInfo, setRecipeInfo] = useState(null);

  useEffect(() => {
    const requestInfo = async () => {
      try {
        console.log('Recipe id', recipeId);
        let res = await axios.get(`http://localhost:5000/${recipeId}`);
        console.log(res.data);
        setRecipeInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    requestInfo();
  }, []);

  return (
    <div>
      {recipeInfo && (
        <div className='max-w-sm rounded overflow-hidden shadow-l bg-blue-100'>
          <img
            className='w-full'
            src={recipeInfo.image}
            alt={recipeInfo.label}
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{recipeInfo.label}</div>
            <div className='font-semibold text-lg mb-2'>
              Calories: {Math.floor(recipeInfo.calories)}
            </div>
            <div className='font-semibold text-lg mb-2'>Ingredients:</div>
            <ol className='text-gray-700 text-base'>
              {recipeInfo.ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
