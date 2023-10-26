import React from "react";
import { AiFillEye } from "react-icons/ai";

interface Iprops {
	title: string;
	icon: any;
	amount: number | string;
}

const DisplayCard: React.FC<Iprops> = ({ amount, title, icon }) => {
	return (
		<div className='w-[270px] p-[20px] md:flex-1 xl:flex-1 2xl:flex-1  lg:flex-1 sm:w-[100%] bg-white text-primary min-h-[100px]   rounded-[10px] shadow-shadow '>
			<div className='flex items-center justify-between'>
				<div className='flex'>
					<div className='h-[40px] w-[40px] bg-secondary rounded-[50%] mr-3 flex items-center justify-center text-[25px]'>
						{icon}
					</div>
					<div className='font-bold text-[17px] text-black mr-2'>{title}</div>
				</div>

				<div className='text-[20px]'>
					<AiFillEye />
				</div>
			</div>
			<div className="text-cyan-900 text-2xl font-bold font-['Open Sans']">
				#{amount}
			</div>
		</div>
	);
};

export default DisplayCard;
