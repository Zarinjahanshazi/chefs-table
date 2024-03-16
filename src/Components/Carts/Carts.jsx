import { useEffect, useState } from "react";



const Carts = ({carts}) => {
    const [preparingItems, setPreparingItems] = useState([]);
    const [totalPreparingTime, setTotalPreparingTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const handlePreparing = (index) => {
        const preparingItem = carts.splice(index, 1)[0];
        setPreparingItems([...preparingItems, preparingItem]);
    };
    
    useEffect(() => {
        let preparingTimeSum = 0;
        let caloriesSum = 0;

        preparingItems?.forEach((cart) => {
            const preparingTime = parseInt(cart.preparing_time);
            preparingTimeSum += preparingTime;

            const calories = parseInt(cart.calories);
            caloriesSum += calories;
        });
        setTotalPreparingTime(preparingTimeSum);
        setTotalCalories(caloriesSum);
    }, [preparingItems]);


    return (
        <div className="md:w-2/5  border rounded-2xl">
            <p className="text-4xl font-bold  text-center">Want to cook:{carts.length}</p>
            <hr />
               <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                   
                    {
                    carts.map((cart,idx) => <tr key={idx} > 
                    
                        <th>{idx+1}</th>

                        <td>{cart.recipe_name}</td>
                        <td>{cart.preparing_time}</td>
                        <td>{cart.calories}</td>
                        <td><button 
                        onClick={() => handlePreparing(idx)}
                        className="btn bg-[#0BE58A] rounded-[50px]">Preparing</button></td>
                    
                    </tr>)
                     }
                   
                    <tr>
                       
                    </tr>
                    </tbody>
                </table>
                </div>         
                     


            <p className="text-4xl font-bold border-b-2 text-center">Currently cooking:{preparingItems.length} </p> 
            
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                   
                    {
                    preparingItems?.map((cart,idx) => <tr key={idx} > 
                    
                    {/* <th>{idx+1}</th> */}
                        <td>{idx+1}</td>
                        <td>{cart.recipe_name}</td>
                        <td>{cart.preparing_time}</td>
                        <td>{cart.calories}</td>
                        {/* <td><button 
                        onClick={() => handlePreparing(idx)}
                        className="btn bg-[#0BE58A] rounded-[50px]">Preparing</button></td> */}
                    
                    </tr>)
                     }
                   
                    <tr>
                        {/* <td>{idx +1}</td> */}
                        <td></td>
                        <td></td>
                        <td>Total Time:{totalPreparingTime} min</td>
                        <td>Total Calories:{totalCalories} calories</td>

                       
                    </tr>
                    </tbody>
                </table>
                </div>
            
           
        </div>
    );
};

export default Carts;