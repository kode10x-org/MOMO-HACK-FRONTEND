import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 60px;
	right: 0;
	bottom: 0;
	width: 300px;
	color: black;
	z-index: 10;
	/* background-color: red; */
	padding-right: 10px;
	

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Wrapper = styled.div`
	margin-top: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
`;

const Cont = styled.div`
	margin-top: 30px;
	width: 100%;
`;

const WalletBar: React.FC = () => {
	return (
		<SidebarContainer>
			<Wrapper>
				<Cont>
					<div className='w-[220px] m-auto h-[46px] text-white justify-center bg-green-500 rounded-[10px] flex items-center mb-5'>
						{" "}
						+ Create Merchants
					</div>
					<div className="h-[300px] w-[100%] bg-white flex-1 ">

					</div>
				</Cont>
			</Wrapper>
		</SidebarContainer>
	);
};

export default WalletBar;
