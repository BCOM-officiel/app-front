import { Box } from '@mui/material';
import TeamMemberCard from '../../../components/TeamMemberCard';
import imgMemberOne from '../../../assets/amelia.png';
import imgMemberTwo from '../../../assets/lou.png';
import imgMemberThree from '../../../assets/lisa.png';
import imgMemberFour from '../../../assets/romane.png';
import imgMemberFive from '../../../assets/nico.png';

const TeamMember = () => {
	return (
		<Box sx={{ display: 'flex', width: '100%'}}>
			<TeamMemberCard
				firstName='Amelia'
				profession='MARKETING COMMUNICATION'
				imageUrl={imgMemberOne}
				color='#164462'
				textColor='#fff'
			/>
			<TeamMemberCard
				firstName='Lou'
				profession='MARKETING COMMUNICATION'
				imageUrl={imgMemberTwo}
				color='#e9ab61'
				textColor='#fff'
			/>
			<TeamMemberCard
				firstName='Lisa'
				profession='MARKETING COMMUNICATION'
				imageUrl={imgMemberThree}
				color='#dc3e38'
				textColor='#fff'
			/>
			<TeamMemberCard
				firstName='Romane'
				profession='MARKETING COMMUNICATION'
				imageUrl={imgMemberFour}
				color='#fff'
				textColor='#2c2d2c'
			/>
			<TeamMemberCard
				firstName='Nicolas'
				profession='INFORMATIQUE'
				imageUrl={imgMemberFive}
				color='#2c2d2c'
				textColor='#fff'
			/>
		</Box>
	);
};
export default TeamMember;
