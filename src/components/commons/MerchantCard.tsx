import React from "react";
import pic from "../../assets/Rectangle_122__1_-removebg-preview.png";

const MerchantCard: React.FC = () => {
	return (
		<div className='relative'>
			<div className='text-white w-[70px]  h-[70px] top-0 left-[40%]  flex justify-center   rounded-[50px] bg-[#58B0E0] absolute '>
				<img className='object-contain' src={pic} />
			</div>
			<div className='bg-white h-[300px] w-[300px]  flex justify-center  '>
				<div className='bg-[#F7FAFC]  min-w-[280px] min-h-[100px] mt-[20px] rounded-2xl flex flex-col items-center '>
					<br />
					<div className='text-[#3D3F3D]  mt-[50px] '>
						<h3 className=' text-1xl text-center font-bold'>Samuel Omamuzo</h3>

						<div className='text-center'>
							<p>omamuzosam43@gmail.com</p>
							<span className=''>09013456789</span>
						</div>
					</div>
					<div className='font-semibold flex w-[70%] justify-between mt-6'>
						<h2 className='text-[#22C55E]'>Activate</h2>

						<h2 className='text-[#E6544A]'>De-activate</h2>
					</div>
					<button className='mt-[20px] bg-[#22C55E] text-white rounded-[5px] px-3 py-[5px]'>
						Grant Loan
					</button>
				</div>
			</div>
		</div>
	);
};

export default MerchantCard;
