import { Box, Container, Typography } from '@mui/material';
import jsonData from '../Profil/exp.json';

const Profil = () => {

	return (
		<Container
			sx={{
				pt: '160px',
				mb: '140px',
			}}>
			<Box sx={{ display: 'flex' }}>
				<Box>
					<Typography variant='h3'>
						{jsonData.data.attributes.headline_title}
					</Typography>
					<Typography variant='body1'>
						{jsonData.data.attributes.headline_subtitle}
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
			<Box sx={{ display: 'flex', mt: 8 }}>
				<Box sx={{ flex: 1, pr: 15 }}>
					<Typography variant='h4' sx={{ mb: 3 }}>A propos</Typography>
					<Typography
						variant='body1'>
						{jsonData.data.attributes.about_content}
					</Typography>
				</Box>
				<Box sx={{ pl: 5 }}>
					<Box
						sx={{
							boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
							backgroundColor: 'transparent',
							borderRadius: 4,
							p: 7,
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
									{jsonData.data.attributes.card_lastname}{' '}
									{jsonData.data.attributes.card_firstname}
								</Typography>
								<Typography
									variant='body1'
									textAlign='end'>
									{jsonData.data.attributes.card_job}
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
									{jsonData.data.attributes.card_places}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Profil;
