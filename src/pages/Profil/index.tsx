import { Box, Container, Typography } from '@mui/material';
import mockData from '../Profil/mock.json';
import Portfolio from '../../components/Portfolio';
import CustomButton from '../../components/button';

const Profil = () => {
	const skills = mockData.data.attributes.skills.map((skill) => skill.name);
	const places = mockData.data.attributes.card.places.map(
		(place) => place.name
	);

	const portfolioImages = mockData.data.attributes.portfolio.map(
		(item) => item.link
	);

	return (
		<Container
			sx={{
				pt: '160px',
				mb: '140px',
			}}>
			<Box sx={{ display: 'flex' }}>
				<Box>
					<Typography variant='h3'>
						{mockData.data.attributes.headline.title}
					</Typography>
					<Typography variant='body1'>
						{mockData.data.attributes.headline.subtitle}
					</Typography>
				</Box>
				<Box>
					<img
						src='https://via.placeholder.com/450x550'
						// src={jsonData.data.attributes.headline_picture.data.attributes.url}
						alt='profil'
					/>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', mt: 4, mb: 6 }}>
				<Box sx={{ flex: 1, pr: 5 }}>
					<Typography
						variant='h4'
						sx={{ mb: 3 }}>
						A propos
					</Typography>
					<Typography variant='body1'>
						{mockData.data.attributes.about}
					</Typography>
				</Box>
				<Box sx={{ pl: 5 }}>
					<Box
						sx={{
							boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
							backgroundColor: 'transparent',
							borderRadius: 4,
							py: 3,
							px: 1,
						}}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around',
							}}>
							<Box>
								<Typography variant='body1'>Nom Prénom:</Typography>
								<Typography variant='body1'>Métier:</Typography>
								<Typography variant='body1'>Localisation:</Typography>
							</Box>
							<Box>
								<Typography
									variant='body1'
									textAlign='end'>
									{mockData.data.attributes.card.lastname}
									{mockData.data.attributes.card.firstname}
								</Typography>
								<Typography
									variant='body1'
									textAlign='end'>
									{mockData.data.attributes.card.jobs}
								</Typography>
								<Typography
									component='span'
									sx={{
										backgroundColor: '#164462',
										borderRadius: 4,
										color: 'white',
										textAlign: 'center',
										px: 1,
										py: 0.5,
										fontSize: 12,
										fontWeight: 600,
									}}>
									{places}
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box mt={20}>
						{skills.map((skill, index) => (
							<Box
								key={index}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									borderBottom: '1px solid white',
									pb: 4,
								}}>
								<Typography
									variant='h3'
									sx={{
										width: '50px',
										textAlign: 'left',
										color: '#B3B3B3',
									}}>{`${(index + 1).toString().padStart(2, '0')}`}</Typography>
								<Typography
									variant='h3'
									sx={{
										flexGrow: 1,
										textAlign: 'left',
										ml: 4,
										textTransform: 'capitalize',
									}}>
									{skill.toLowerCase()}
								</Typography>
								<Box
									sx={{
										width: '30px',
										height: '30px',
										borderRadius: '50%',
										backgroundColor: '#ff0000',
									}}
								/>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
			<Box>
				<Typography
					variant='h4'
					sx={{ textAlign: 'end', mb: 4 }}>
					Portfolio
				</Typography>
				<Portfolio>
					{portfolioImages.map((image, index) => (
						<Box key={index}>
							<img
								src={image}
								alt='image portfolio'
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									console.log("Erreur de chargement de l'image :", target.src);
								}}
							/>
						</Box>
					))}
				</Portfolio>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
				<CustomButton>
					Contactez {mockData.data.attributes.card.firstname}
				</CustomButton>
			</Box>
		</Container>
	);
};

export default Profil;
