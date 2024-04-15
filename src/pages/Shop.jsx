import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import {add,remove} from '../redux/slices/Slice'

const Shop = () => {
    const pram =useLocation();
    const id =pram.pathname.split("/").at(-1);
    console.log(id)
    console.log("inn shop")
    const {cart} =useSelector(state => state)
    const dispatch = useDispatch();




    const [data,setData] = useState({})
    async function dataFetch(id){
        const data =await fetch(`https://fakestoreapi.com/products/${id}`)
        const result =await data.json();
        setData(result)
        console.log(result);

    }

    const removeFunction =(id) =>{
           dispatch(remove(id));        

    }

    useEffect( ()=>{
        dataFetch(id);
    },[pram.pathname])

  return (
    <div>
      <div className=' sm:flex sm:flex-col   lg:flex lg:flex-row w-[80vw] mx-auto mt-[20px]'>
        <div className='w-[100%] shadow-2xl'>
        <img src={data.image} alt="" className='h-[100%] w-[100%] object-contain' />
        </div>
        <div className=' flex flex-col gap-12 pl-10 pt-10'>
            <p className='text-2xl font-extrabold border-b-[2px] border-black h-[90px]'>{data.title}</p>
            <p>{data.description}</p>
            <p className='text-2xl font-[600]'>Rating : <span>{data?.rating?.rate}/5</span></p>
            <div>
                <p className='text-green-600 text-[30px] font-[700] tracking-[1px] '>${data.price}</p>
                    {
                        cart.some((d) => d.id ===data.id) ?(
                            <button 
                            className='border-[1px] p-3 mt-5 rounded-full bg-green-600 text-red-600 '
                            onClick={()=>removeFunction(data.id)}
                            >
                                Remove item
                            </button>
                        ):
                        (
                            <button
                            className='p-3 mt-5 rounded-full bg-green-600 text-black'
                            onClick={()=>dispatch(add(data))}
                            >
                            Add item
                        </button>
                        )
                    }
                
            </div>

        </div>
        
      </div>
    </div>
  )
}

export default Shop
