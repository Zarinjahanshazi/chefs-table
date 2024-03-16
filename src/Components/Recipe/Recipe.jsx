import {CiClock2} from 'react-icons/ci'
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types'
import Ingredients from '../Ingredients/Ingredients'

const Recipe = ({recipe,handleWantToCook}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe
    console.log(recipe)
  return (
    <div>

<div className="card card-compact  bg-base-100 shadow-xl">
    
  <figure><img className='rounded-2xl w-full p-2' src={recipe_image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className='border-b-2'>{short_description}</p>
    <p>Ingredients:{ingredients.length}</p>

    {
        ingredients.map((ingredient,idx) => <Ingredients key={idx} ingredient ={ingredient}></Ingredients>)
    }
    <p className='border-b-2'></p>

    <div className='flex gap-4'>
            <div className='flex items-center'>
                <p><CiClock2 /></p>
                <p>{preparing_time}</p>
            </div>

            <div className='flex items-center'>
                <p><RiFireLine/></p>
                <p>{calories}</p>
            </div>    


        </div>

    <div className="card-actions">
        
        
      <button onClick={() => handleWantToCook(recipe)} className="btn bg-[#0BE58A] rounded-[50px]">Want to Cook</button>
    </div>
  </div>
</div>
      
    </div>
  )
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default Recipe
