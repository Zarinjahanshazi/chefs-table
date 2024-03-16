
import PropTypes from 'prop-types'

const Ingredients = ({ingredient}) => {
    console.log(ingredient)
  return (
    <div>
        <li>{ingredient}</li>
      
    </div>
  )
}

Ingredients.propTypes = {
    ingredient :PropTypes.array
}

export default Ingredients
