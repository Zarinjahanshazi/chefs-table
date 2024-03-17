import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Carts from './Components/Carts/Carts'

function App() {
  const [carts, setCarts] = useState([])
  const handleWantToCook = (recipe) => {
    const isRecipeInCart = carts.some((cart) => cart.recipe_id === recipe.recipe_id);
    if (isRecipeInCart) {
      toast.error('already exist');
    } else {
      const newCarts = [...carts, recipe];
      setCarts(newCarts);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ToastContainer />

      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Our Recipes</h1>
        <h1 className="text-base font-normal">Our recipe: Blend fresh ingredients, season to taste, simmer slowly, and savor the delightful flavors <br /> of homemade goodness.Enjoy culinary delight! </h1>
      </div>

      <div className='flex max-w-9xl mx-10 mt-10'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>

        {/* <Carts wantToCook={wantToCook}></Carts> */}
        <Carts carts={carts}></Carts>
      </div>
    </>
  )
}
export default App