import { Container, Box, Typography } from '@mui/material';
import TeamCard from '../../components/TeamCard';
import imgHeader from '../../assets/Bannière.pageéquipe.png';
import RomaneImg from '../../assets/TeamImg/FAV Romane.jpg';
import LisaImg from '../../assets/TeamImg/lisabcom.jpg';
import AmeliaImg from '../../assets/TeamImg/Amelia-bcom.jpg';
import LouImg from '../../assets/TeamImg/loubcom.jpg';
import StephImg from '../../assets/TeamImg/stephanebcom.jpg';
import MickaImg from '../../assets/TeamImg/mika.b.com.jpg';
import NicoImg from '../../assets/TeamImg/nicolas-b.com.jpg';
import JuliaImg from '../../assets/TeamImg/juliabcom.jpg';
import LeslieImg from '../../assets/TeamImg/bcom.jpg';
import PhotoTeam from '../../assets/Photo.pageéquipe.png';

const Team = () => {
	return (
		<Box sx={{ marginBottom: '120px' }}>
			<Box
				sx={{
					height: '800px',
					mb: 5,
					background: `linear-gradient(to top, rgba(0,0,0,0.2), transparent 30%, #000), url(${imgHeader}) center / cover`,
				}}
			/>
			<Container
				maxWidth='xl'
				sx={{
					gap: 4,
					minHeight: '50vh',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
				}}>
            
				<TeamCard
					id={1}
					name='Lisa'
					job='Cheffe de projet'
					picture={LisaImg}
				/>
				<TeamCard
					id={2}
					name='Romane'
                    job='Marketing-Communication'
					picture={RomaneImg}
				/>
				<TeamCard
					id={3}
					name='Amelia'
					job='Marketing-Communication'
					picture={AmeliaImg}
				/>
				<TeamCard
					id={4}
					name='Lou'
					job='Marketing-Communication'
					picture={LouImg}
				/>
				<TeamCard
					id={5}
					name='Stephane'
					job='Développeur Fullstack'
					picture={StephImg}
				/>
				<TeamCard
					id={6}
					name='Micka'
					job='Développeur Front End'
					picture={MickaImg}
				/>
				<TeamCard
					id={7}
					name='Nicolas'
					job='Développeur Front End'
					picture={NicoImg}
				/>
				<TeamCard
					id={8}
					name='Julia'
					job='Créa-Design'
					picture={JuliaImg}
				/>
				<TeamCard
					id={9}
					name='Leslie'
					job='Créa-Design'
					picture={LeslieImg}
				/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center', // Centre les éléments horizontalement
                        mt: 15 // Pour occuper toute la hauteur de la fenêtre
					}}>
					<img
						src={PhotoTeam}
						alt='photo équipe'
						style={{ width: '70%' }}
					/>
					<Typography
						variant='h4'
						sx={{
							fontFamily: "'PT Sans Narrow', sans-serif",
							color: '#104262',
							fontWeight: 900,
						}}>
						A très vite chez B'COM
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
export default Team;
