

import { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe'

const Recipes = () => {
    const [recipes,setRecipes] =useState([])

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

  return (
    <div className='md:w-3/5 grid grid-cols-2'>
            
            

            {
                recipes.map((recipe,idx) => <Recipe key={idx} recipe={recipe}></Recipe>)
                
                
            }

            
        </div>
  )
}

Recipes.propTypes = {

}

export default Recipes
