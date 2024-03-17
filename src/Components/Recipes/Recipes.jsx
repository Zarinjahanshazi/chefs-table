
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe'

const Recipes = ({handleWantToCook}) => {
    const [recipes,setRecipes] =useState([])

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

  return (
    <div className='md:w-3/5 grid grid-cols-2 gap-4 '>
            
            

            {
                recipes.map((recipe,idx) => <Recipe key={idx} handleWantToCook={handleWantToCook} recipe={recipe}></Recipe>)
                
                
            }

            
        </div>
  )
}

Recipes.propTypes = {
    handleWantToCook:PropTypes.func
}

export default Recipes
