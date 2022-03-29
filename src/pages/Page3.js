import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
const StyledTimeLine = styled(Timeline)`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	@keyframes leftfadein {
		0% {
			opacity: 0;
			transform: translateX(-50vw);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@keyframes rightfadein {
		0% {
			opacity: 0;
			transform: translateX(50vw);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.left1 {
		animation: leftfadein 1s ease-out;
		animation-delay: 1s;
		animation-fill-mode: forwards;
		transform: translateX(-50vw);
	}
	.left2 {
		animation: leftfadein 1s ease-out;
		animation-delay: 3s;
		animation-fill-mode: forwards;
		transform: translateX(-50vw);
	}

	.right1{
		animation: rightfadein  1s ease-out;
		animation-fill-mode: forwards;
		transform: translateX(50vw);
	}
	.right2{
		animation: rightfadein 1s ease-out;
		animation-delay: 2s;
		animation-fill-mode: forwards;
		transform: translateX(50vw);
	}
`;
export default function Page3() {
	return (
		<StyledTimeLine position='alternate'>
			<TimelineItem>
				<TimelineSeparator >
					<TimelineDot>
						<FastfoodIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }} className='right1'>
					<Typography variant='h6' component='span'>
						Eat
					</Typography>
					<Typography>Because you need strength</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot >
						<LaptopMacIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }} className='left1'>
					<Typography variant='h6' component='span'>
						Code
					</Typography>
					<Typography>Because it&apos;s awesome!</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot  variant='outlined'>
						<HotelIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }} className='right2'>
					<Typography variant='h6' component='span'>
						Sleep
					</Typography>
					<Typography>Because you need rest</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector   />
					<TimelineDot >
						<RepeatIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }} className='left2'>
					<Typography variant='h6' component='span'>
						Repeat
					</Typography>
					<Typography>Because this is the life you love!</Typography>
				</TimelineContent>
			</TimelineItem>
		</StyledTimeLine>
	);
}
