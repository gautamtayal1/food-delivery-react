import React from 'react'

const Cart = () => {
  return (
    <div className=' h-[100vh] w-3xl m-auto mb-4 p-8 '>
      <h1 className='text-3xl font-semibold mb-5'>Cart</h1>
      
      {/* Info Div */}
      <div className="item-box h-25 w-[100%] mb-5">

        <div className="infoDiv bg-gray-100 h-full flex justify-between items-center p-5">
          <div className="itemName text-2xl">Tandoori Panner</div>
          <div className="updateBtn flex gap-3 border p-2 rounded-2xl">
            <button className='text-gray-500'>-</button>
            <span>1</span>
            <button className=' text-green-400'>+</button>
          </div>
          <div className="price text">₹320</div>
        </div>
      </div>

      {/* apply coupon */}

      <div className="couponSec my-6 bg-orange-500 text-white font-semibold">
        <h1 className='h-20 border-1 border-dashed text-2xl flex justify-center items-center m'>Apply Coupon</h1>
      </div>

      {/* bill details */}
      <div className="billSection flex flex-col gap-3">
        <h1 className='text-2xl font-semibold'>Bill Details</h1>
        <div className="flex justify-between">
          <span className='mr-10'>Item Total</span>
          <span>₹320</span>
        </div>
        <div className=" flex justify-between">
          <span className='mr-10'>Delivery Fee</span>
          <span>₹20</span>
        </div>
        <div className="flex justify-between">
          <span className='mr-10'>Platform Fee</span>
          <span>₹10</span>
        </div>
        <div className="flex justify-between">
          <span className='mr-10'>GST and Restaurant Charges</span>
          <span>₹50</span>
        </div><hr />
        <div className="flex justify-between font-bold">
          <span className='mr-10'>Item Total</span>
          <span>₹400</span>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
