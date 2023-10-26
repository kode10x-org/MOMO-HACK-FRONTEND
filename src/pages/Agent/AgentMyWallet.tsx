import React from 'react'
import Table from '../../components/commons/Table'
import {MdVisibilityOff} from "react-icons/md"
import {MdVisibility} from "react-icons/md"

const AgentMyWallet = () => {
  return (
   <div>
     
    <div className='flex gap-12 flex-wrap mt-2 mx-7 '>
				<div className='flex-1 bg-white min-h-[300px] rounded-[10px] p-6   shadow-shadow'>
                    <div className="flex items-center gap-2">
                        <div className='font-bold text-[30px] '><h2>Wallet Balance</h2></div>
                        <div className="text-[#084A5F]">
                        <MdVisibilityOff/>
                        </div>
                        <div className='hidden'>
                        <MdVisibility/>
                        </div>
                    </div>
                    <div className="font-bold text-[50px] text-[#084A5F] mb-4 ">
                        <h1>134,000</h1>
                    </div>
                    <div className="mb-12 text-gray-500 font-medium">
                        <p>As at 6th October 2023</p>
                    </div>
                    <div className=' h-[45px] text-white justify-center bg-green-500 rounded-[10px] flex items-center mb-2 font-bold'>
                    Add Money To Wallet
                     </div>
                </div>
				<div className='w-[320px] min-h-[300px] bg-white rounded-[10px] shadow-shadow'></div>
			</div>
    <div className='min-h-[300px] rounded-[10px] mt-10 p-5 mx-7 shadow-shadow  bg-white'> Revenue Flow</div>
   
    <div className='flex-1 mt-10 bg-white min-h-[300px] mb-10 rounded-[10px] p-5 shadow-shadow mx-7'>
				<div>Transaction History</div>
				<div>
					<Table />
				</div>
			</div>
   </div>
   
  )
}

export default AgentMyWallet