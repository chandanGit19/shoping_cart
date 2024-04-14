import React, { useEffect, useState } from 'react'
import Spinner from '../component/Spinner';
import Product from '../component/Product';

function Home() {

    const API_URL ="https://fakestoreapi.com/products"
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchapi(){
      setLoading(true)

      try {
        const response = await fetch(API_URL);
      const result = await response.json();
      console.log(result);
      setData(result)
        
      } catch (error) {
        console.log("error occure during the fetching time")
      }
      
      setLoading(false);
      
    }

    useEffect( ()=>{
      fetchapi()
    },[]);

  return (
    <div>
      {
        loading ? (
             <Spinner/>
        ) :
        (
          
            data.length > 0 ? (
              <div className='grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                {
                data.map( (post) =>(
                  <Product key ={post.id} post ={post}/>
                ))
              }
                </div>
            )
            :
            (
              <div className='flex justify-center items-center text-4xl'>
                <h1>no data found</h1>
                </div>
             
            )
          

        )
      }
      
      
    </div>
  )
}

export default Home
