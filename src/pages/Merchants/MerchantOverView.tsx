import React from "react";
import DisplayCard from "../../components/commons/DisplayCard";
import Table from "../../components/commons/Table";
import PayBil from "../../components/Paybil/PayBil";
import { GiPayMoney } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";

const MerchantOverView = () => {
	return (
		<div>
			<div className='flex gap-5 flex-wrap '>
				<DisplayCard title='Wallet Balance' amount={890.807} icon={<TbCurrencyNaira/>} />
				<DisplayCard title='Total Loan Limit' amount={6000} icon={<GiPayMoney/>}  />
				<DisplayCard title='Total Loan Given' amount={35000} icon={<GiPayMoney/>}  />
			</div>


            <div className="mt-10 sm:overflow-x-scroll">
                <PayBil  />
            </div>

			<div className='flex gap-10 flex-wrap mt-10'>
				<div className='flex-1 bg-white h-[300px] rounded-[10px] p-5 shadow-shadow'>
					Revenue
				</div>
				<div className='w-[250px] h-[300px] bg-white rounded-[10px] shadow-shadow'></div>
			</div>

			<div className='flex-1 mt-10 bg-white min-h-[300px] mb-10 rounded-[10px] p-5 shadow-shadow'>
				<div>Transaction History</div>
				<div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default MerchantOverView;
