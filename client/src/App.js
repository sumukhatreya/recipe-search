import { useState } from 'react';
import SearchBar from './components/header/search';
import Recipe from './components/recipe';
import { Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/recipeDetails';

function App() {
  const [recipes, setRecipes] = useState(null);

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <div>
                <SearchBar updateRecipes={(data) => setRecipes(data)} />
              </div>
              {recipes && (
                <div className='flex flex-wrap justify-evenly'>
                  {recipes.map((recipe) => (
                    <Recipe
                      key={recipe.recipe.uri}
                      uri={recipe.recipe.uri}
                      title={recipe.recipe.label}
                      imageUrl={recipe.recipe.image}
                    />
                  ))}
                </div>
              )}
            </div>
          }
        />
        <Route path='/:recipeId' element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
