
import PropTypes from 'prop-types'

const Recipe = ({recipe,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories}) => {
    const {recipe_image} = recipe
    console.log(recipe)
  return (
    <div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
    
  <figure><img src={recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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
