import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from '../redux/slices/Slice'
import { NavLink } from 'react-router-dom';

const Product = ({post}) => {
    const {cart} = useSelector((state)=>state);

    const dispatch = useDispatch();

    const addToCart =()=>{
        dispatch(add(post));
        // toast.success("item added to cart")
    }

    const remoeFromeCart =()=>{
        dispatch(remove(post.id));
        // toast.success("item remove from cart")
    }
  return (
    <div className='flex flex-col justify-between items-center shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl  hover:scale-110 transition duration-300 hover:shadow-[rgba(0,_0,_0,_0.8)_0px_30px_90px]'>
      <div>
        <p className='text-gray-900 font-semibold text-lg text-left  truncate w-40 mt-1'>
            {post.title.substring(0,16) +"..."}
        </p>
      </div>
      <div>
        <p className='w-40 texxt-gray-400 text-[10px] font-normal text-left'>
            {post.description.split(" ").slice(0,10).join("  ") + "...."}
        </p>
      </div>
      <NavLink to={`/shop/${post.id}`}>
      <div className='h-[180px]'> 
        <img className='loading-lazy h-full w-full' src= {post.image} alt="" />
      </div>
      </NavLink >
      <div className='flex justify-between gap-14 mt-10'>
        <p className='text-green-600 font-bold'>
            ${post.price}
        </p>
     
      <div>
        {
         cart.some((p) => p.id ==post.id) ?
         ( <button
         className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-75'
           onClick={remoeFromeCart}
            >
            Remove Item
         </button>):
         (
            <button 
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-75'
              onClick={addToCart}
            >
                Add item
            </button>
         )
        }

      </div>
      </div>


    </div>
  )
}

export default Product
