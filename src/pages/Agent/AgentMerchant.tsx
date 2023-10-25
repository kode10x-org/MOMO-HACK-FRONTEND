import React from 'react'
import MerchantCard from '../../components/commons/MerchantCard'

const AgentMerchant = () => {
  return (
    <div className='bg-white min-h-[300px] mb-10 
      rounded-[10px] p-5 shadow-shadow mt-2'>
      <div className='flex items-center'>
        <input
          placeholder='Search for a Merchant'
          className='bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-200 text-black 
          text-opacity-40 dark:focus:ring-blue-500 mb-3'/>
        <div
          className='w-[120px] ml-2.5 m-auto h-[45px] text-white justify-center bg-green-500 rounded-[10px] flex items-center mb-3'>
          {" "}
          Search
        </div>
      </div>
      <div className='flex flex-wrap'>
        <MerchantCard/>
        <MerchantCard/>
        <MerchantCard/>
        <MerchantCard/>
        <MerchantCard/>
        <MerchantCard/>
        <MerchantCard/>
        <MerchantCard/>
        <MerchantCard/>
      </div>
    </div>
  )
}

export default AgentMerchant