
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './componante/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
 
  return (
    <>
     
      <h1 className='text-4xl font-extrabold text-center m-5'>Hot hot cold coffee :{coffees.length}</h1>
   <div className='grid grid-cols-2 gap-6'>
   {
        coffees.map(coffee =><CoffeeCard key={coffee._id}
          coffees={coffees}
          setCoffees={setCoffees}
        coffee={coffee}></CoffeeCard> )
      }
   </div>
     
    </>
  )
}

export default App
