import React from "react";
import DisplayCard from "../../components/commons/DisplayCard";

const AgentOverView = () => {
	return (
		<div>
			<div className='flex gap-5 flex-wrap'>
				<DisplayCard title='Wallet Balance' amount={50000} />
				<DisplayCard title='Total Loan Limit' amount={140000} />
				<DisplayCard title='Total Loan Given' amount = {65000} />
			</div>
		</div>
	);
};

export default AgentOverView;
