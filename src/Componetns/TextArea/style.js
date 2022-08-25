/** @format */

import styled from 'styled-components';

const Block = styled.div`
	border: 5px solid teal;
	width: 90%;
	min-height: 100px;
	margin: 20px auto;
	border-radius: 25px;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	.block{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	>Select{
		border: 3px solid teal !important;
	}
`;
Block.Center = styled.div`
	font-size: 24px;
	font-weight: 400;
	line-height: 30px;
	display: grid;
	justify-content: center;
	align-items: center;
	> div > input {
		width: 400px;
		height: 40px;
		font-size: 22px;
	}
`;

export { Block };
