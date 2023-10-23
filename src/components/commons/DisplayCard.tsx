import React from "react";
import { AiFillEye } from "react-icons/ai";
interface Iprops {
	title: string;
	amount: number;
}

const DisplayCard: React.FC<Iprops> = ({ amount, title }) => {
	return (
		<div className='w-[270px] p-[20px] flex-1 bg-white text-primary min-h-[100px]   rounded-[10px] shadow-shadow '>
			<div className='flex items-center justify-between'>
				<div className='flex'>
					<div className='h-[30px] w-[30px] bg-secondary rounded-[50%] mr-3'>
						<img  />
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
