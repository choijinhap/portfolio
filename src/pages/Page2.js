import { styled, Typography } from '@mui/material';

const StyledDiv = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
`;
const skills = [{ name: 'JavaScript', level: 2 }];
export default function Page2() {
	return (
		<StyledDiv>
			<div className='title'>
				<Typography>SKILL</Typography>
			</div>
		</StyledDiv>
	);
}
