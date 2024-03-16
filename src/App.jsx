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
      toast.error('This recipe is already in your cart!');
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

      <div className="text-center">
        <h1 className="text-2xl font-bold">Our Recipes</h1>
        <h1 className="text-base">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </h1>
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