import { Box, Container, Typography } from '@mui/material';
import quadrillage from '../../../assets/quadrillage.png';
import ImageHero from '../../../assets/Image2Hero.png';

const Hero = () => {
	return (
		<Box
			sx={{
				backgroundImage: 'linear-gradient(to bottom, #eeeeee, #e5e5e5 75%, #515151)', // Modification du dégradé
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<Box sx={{ marginLeft: '250px', display:'flex', flexDirection:'column'}}>
				<Box sx={{ textAlign:'center'}}>
					<img
						src={quadrillage}
						alt='hero'
					/>
				</Box>
				<Typography
					variant='h1'
					textAlign='center'
					sx={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: '3rem',
					}}>
					Trouvez votre talent
				</Typography>
			</Box>
			<Box>
				<img
					src={ImageHero}
					alt='hero'
					style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
				/>
			</Box>
		</Box>
	);
};

export default Hero;
