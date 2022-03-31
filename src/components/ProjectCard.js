import {
	BottomNavigation,
	BottomNavigationAction,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Paper,
	styled,
	Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
const StyledCard = styled(Card)`
	.MuiCardMedia-img {
		object-fit: fill;
	}

	.MuiCardContent-root {
		text-align: center;
	}
	margin-bottom: 3px;
`;
export default function ProjectCard() {
	const [value, setValue] = useState('');
	const handleMouseOver = (e) => {
		if (e.target.innerText && value !== e.target.innerText)
			setValue(e.target.innerText);
	};
	return (
		<div>
			<StyledCard sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					alt='green iguana'
					height='200'
					image='img/test.png'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h4'
						component='div'
						className='title'
					>
						포트폴리오
					</Typography>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						className='subtitle'
					>
						프론트엔드 개발자 포트폴리오 웹사이트 개발
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						className='description'
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
						quasi debitis neque architecto unde alias hic, in, necessitatibus
						rerum exercitationem laboriosam distinctio obcaecati quidem tempora
						voluptas! Sit voluptatem quisquam eligendi!
					</Typography>
				</CardContent>
			</StyledCard>
			<Card sx={{ maxWidth: 345 }}>
				<BottomNavigation
					sx={{ width: 345 }}
					value={value}
					onMouseLeave={(e) => setValue('')}
				>
					<BottomNavigationAction
						label='Recents'
						value='Recents'
						icon={<HomeIcon />}
						onMouseOver={handleMouseOver}
					/>
					<BottomNavigationAction
						label='Favorites'
						value='Favorites'
						icon={<HomeIcon />}
						onMouseOver={handleMouseOver}
					/>
					<BottomNavigationAction
						label='Nearby'
						value='Nearby'
						icon={<HomeIcon />}
						onMouseOver={handleMouseOver}
					/>
					<BottomNavigationAction
						label='Folder'
						value='Folder'
						icon={<HomeIcon />}
						onMouseOver={handleMouseOver}
					/>
				</BottomNavigation>
			</Card>
		</div>
	);
}
