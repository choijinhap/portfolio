import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledDiv = styled('div')`
	animation: fadein 7s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	@keyframes fadein {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
`;
export default function Page1() {
	return (
		<StyledDiv>
			<Typography variant='h1'>안녕하세요</Typography>
			<Typography variant='h1'>Hello</Typography>
			<Typography variant='h1'>Hello</Typography>
			<Typography variant='h1'>Hello</Typography>
		</StyledDiv>
	);
}
