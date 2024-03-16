
import './App.css'
import Banner from './Components/Banner/Banner'

import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Table from './Components/Table/Table'



function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      
      <div className="text-center">
                <h1 className="text-2xl font-bold">Our Recipes</h1>
                <h1 className="text-base">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </h1>
            </div>
      


      <div className='flex max-w-9xl mx-auto mt-10'>
        <Recipes>  </Recipes>

        <Table></Table>
      </div>
      
      
    </>
  )
}

export default App
