import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 60px;
	right: 0;
	bottom: 0;
	width: 250px;
	color: black;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	z-index: 10;
	background-color: white;

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
	margin-top: 45px;
`;

const WalletBar: React.FC = () => {
	return (
		<SidebarContainer>
			<Wrapper>
				<Cont>Wallet</Cont>
			</Wrapper>
		</SidebarContainer>
	);
};

export default WalletBar;
