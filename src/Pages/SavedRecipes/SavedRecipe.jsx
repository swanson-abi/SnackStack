import React from 'react'
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function SavedRecipe() {
  const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        // Retrieve saved recipes from localStorage
        const recipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        setSavedRecipes(recipes);
    }, []);

    const removeRecipe = (idToRemove) => {
        const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== idToRemove);
        localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
        setSavedRecipes(updatedRecipes);
    };

    return (
        <SavedRecipesWrapper>
            <h2>Saved Recipes</h2>
            {savedRecipes.length === 0 ? (
                <p>No recipes saved yet</p>
            ) : (
                <RecipeList>
                    {savedRecipes.map((recipe) => (
                        <SavedRecipeItem key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <img src={recipe.image} alt={recipe.title} />
                                <h3>{recipe.title}</h3>
                            </Link>
                            <RemoveButton onClick={() => removeRecipe(recipe.id)}>
                                Remove
                            </RemoveButton>
                        </SavedRecipeItem>
                    ))}
                </RecipeList>
            )}
        </SavedRecipesWrapper>
    )
}

const SavedRecipesWrapper = styled.div`
    padding: 2rem;
    text-align: center;
`;

const RecipeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`;

const SavedRecipeItem = styled.div`
    width: 250px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    h3 {
        padding: 1rem;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const RemoveButton = styled.button`
    width: 100%;
    padding: 0.5rem;
    background-color: #ff4444;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #ff6666;
    }
`;

export default SavedRecipe
