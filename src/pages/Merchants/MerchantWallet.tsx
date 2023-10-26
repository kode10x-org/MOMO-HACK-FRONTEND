import React from "react";
import { AiFillEye } from "react-icons/ai";
import PayBil from "../../components/Paybil/PayBil";
import Table from "../../components/commons/Table";

const MerchantWallet = () => {
	return (
		<div>
			<div className='flex gap-10 flex-wrap '>
				<div className='flex-1 bg-white rounded-[10px] p-5 shadow-shadow'>
					<div className='flex items-center justify-between'>
						<div className='flex'>
							<div className='font-bold text-[20px] text-black mr-2'>
								Wallet Balance
							</div>
						</div>
						<div className='text-[20px]'>
							<AiFillEye />
						</div>
					</div>
					<div className="text-cyan-900 text-2xl font-bold font-['Open Sans']">
						#6900.00
					</div>
					<div className='text-black mt-4 text-opacity-60 text-xs font-normal '>
						As at 6th October 2023{" "}
					</div>
					<div className='w-[220px] mt-5 h-[46px] text-white justify-center bg-green-500 rounded-[10px] flex items-center mb-2 cursor-pointer'>
						{" "}
						Fund Wallet
					</div>
				</div>
				<div className='w-[400px]  bg-white rounded-[10px] shadow-shadow'></div>
			</div>
			<div className='mt-10 sm:overflow-x-scroll'>
				<PayBil />
			</div>

			<div className='flex-1 bg-white h-[300px] mt-10 rounded-[10px] p-5 shadow-shadow'>
				Revenue
			</div>

			<div
				className='flex-1 mt-10 bg-white min-h-[300px] mb-10 rounded-[10px] p-5 
shadow-shadow'>
				<div>Transaction History</div>
				<div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default MerchantWallet;
