import { Button } from 'bootstrap';
import React from 'react'
import { NavLink } from 'react-router-dom';
import SavedRecipe from '../../Pages/SavedRecipes/SavedRecipe';

function Recipes() {
  const user = true;
  return (
    <div>
      <NavLink to="/Write">
        <button>Add New Recipe!</button>
      </NavLink>
      <SavedRecipe/>
    </div>
  )
}

export default Recipes
