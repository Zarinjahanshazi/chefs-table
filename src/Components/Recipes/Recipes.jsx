
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe'

const Recipes = props => {
    const [recipes,setRecipes] =useState([])

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
  return (
    <div className="mt-10">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Our Recipes</h1>
                <h1 className="text-base">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </h1>
            </div>
            

            {
                recipes.map((recipe,idx) => <Recipe key={idx} recipe={recipe}></Recipe>)
            }

            
        </div>
  )
}

Recipes.propTypes = {

}

export default Recipes
