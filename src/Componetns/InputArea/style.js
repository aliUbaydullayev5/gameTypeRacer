/** @format */

import styled from 'styled-components';

const Block = styled.div`
	border: 5px solid teal;
	width: 90%;
	min-height: 300px;
    margin: 20px auto;
    border-radius: 25px;
    background-color: var(--tealColor);
    padding: 10px;
    font-size: 26px;
    font-weight: 400;
    line-height: 40px;
    
`;
Block.Text = styled.span`
    color: ${({complate})=> complate ? 'white' : 'black'};
    background: ${({ complate }) => complate ? 'green' : ''};
    border-radius: 10px;
    padding: 5px;
    margin: 0 5px;
`;

export { Block };
