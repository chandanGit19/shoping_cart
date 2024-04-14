import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cartitem from '../component/Cartitem'

const Cart = () => {

  const {cart} =useSelector(state => state)

  const [totalAmount,setTotalAmount] = useState(0);

 useEffect(()=>{
  setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price ,0))
 },[cart])

  return (
    <div>
      {
        cart.length > 0 ? (
          <div className='flex justify-between items-start mx-auto max-w-[80vw] min-h-[80vh] shrink-0'>
          <div className='overflow-auto max-h-[90vh] w-[60%]'>
          {
            cart.map((item,index) =>{
              return <Cartitem key ={item.id} item ={item}/>
            })
          }
          </div>
          <div className='w-[32%] flex flex-col justify-between  shrink-0 h-[82vh] '>
              <div className='mt-[20px]'>
              <p className='text-green-700 font-bold text-2xl'>Your Cart</p>
              <div className='text-green-700 font-bold text-4xl uppercase tracking-[1px]'>Summery</div>
              <p className='mt-[20px] text-black font-[500] text-[20px]'>
                <span>Total Items :{cart.length}</span>
              </p>
              </div>

                <div className='flex flex-col justify-between  h-[80px]'>
                  <p className='mb-[20px] text-black font-[500] text-[17px]'>Total Amount :<span className='font-[800] text-[20px]'>${totalAmount}</span></p>
                  <button className='bg-green-400 mb-[10px] p-[10px] '>
                    Checkout 
                  </button>

                </div>
          </div>




          
          </div>
        )
        :
        (
          <div className='flex flex-col items-center justify-center h-[80vh]'>
          <h1 className='text-3xl font-bold'>Cart is Empty</h1>
          <Link to="/">
          <button className='bg-green-600 px-[35px] py-[10px] mt-[20px] rounded-full'>
            Shop Now
          </button>
          </Link>
           </div>
        )

      }
      
    </div>
  )
}

export default Cart
