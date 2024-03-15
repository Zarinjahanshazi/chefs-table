
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipe from './Components/Recipe/Recipe'
import Recipes from './Components/Recipes/Recipes'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Recipes></Recipes>
      <Recipe></Recipe>
      
    </>
  )
}

export default App
