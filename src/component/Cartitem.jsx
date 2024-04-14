import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/Slice';
import { NavLink } from 'react-router-dom';

const Cartitem = ({item}) => {
    const dispatch = useDispatch();
    const removeFromeCart =()=>{
       dispatch(remove(item.id));
    }
  return (
    <div className='flex justify-center  h-full  border-b-[4px] border-black mt-[30px]'>
        <div className='w-[240px]'>
            <NavLink to={`/shop/${item.id}`}>
            <img src={item.image} alt="" className='w-full h-full object-contain' />
            </NavLink>
        </div>
        <div className='ml-[20px] flex flex-col justify-around w-[55%] '>
            <h1 className='font-semibold text-xl'>
                {item.title}
            </h1>
            <h1 className='mt-[20px] text-[15px]'>{item.description.split(" ").slice(0,17).join(" ") +"...."}</h1>
            <div className='mt-[70px] flex justify-between items-center'>
                 <p className='text-green-700 text-2xl font-bold'>
                    ${item.price}
                 </p>
                 <div
                  onClick={removeFromeCart}
                 >
                 <MdDelete className='bg-red-400 h-[25px] w-[25px] p-[2px] rounded-full cursor-pointer hover:scale-[1.3] transition ease-out' />
                 </div>
            </div>
        </div>
      
    </div>
  )
}

export default Cartitem
