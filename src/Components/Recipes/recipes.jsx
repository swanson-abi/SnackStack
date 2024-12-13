import React from 'react'
import { NavLink } from 'react-router-dom';
import SavedRecipe from '../../Pages/SavedRecipes/SavedRecipe';
import Recipe from '../Recipe/recipe';
import axios from "axios";
import { useState, useEffect } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get("/recipes");
      setRecipes(res.data);
    }
    fetchRecipes();
  }, []);

  // const user = true;
  return (
    <>
      <div className='recipes'>
        {recipes?.map(r => (
          <Recipe recipe={r}/>
        ))}
      </div>
      <div>
        <NavLink to="/Write">
          <button>Add New Recipe!</button>
        </NavLink>
        <SavedRecipe />
      </div>
    </>
  )
}

export default Recipes
