import React from 'react';
import Hero from './Hero';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/button';
import Carousel from '../../components/Carousel/index';
import CarouselItem from '../../components/Carousel/CarouselItem';
import picture from '../../assets/pexels-karolina-grabowska-4471894.jpg';
import TeamMember from './TeamMember';
import Presentation from './Presentation';
import Evenement from './Evenement';

export const Home = () => {
	return (
		<Box
			sx={{
				background: '#eee',
			}}>
			<Hero />
			<Presentation />
			<Carousel
				sx={{
					mb: '128px',
				}}>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				<CarouselItem
					talentId={2}
					talentName='Laura Dupont'
					talentProfession='Artiste Graphiste Webdesigner'
					src={picture}
					alt='someone'></CarouselItem>
				,
			</Carousel>
			<Evenement />
			<Box
				sx={{
					my: '120px',
					px: '120px',
					maxWidth: '996px',
				}}>
				<Typography
					component='h2'
					sx={{
						fontFamily: "'PT Sans Narrow', sans-serif",
						fontSize: '48px',
						my: 2,
					}}>
					La Team B'COM
				</Typography>
				<Typography
					component='h3'
					sx={{
						fontSize: '1.5rem',
						my: 2,
					}}>
					Rencontrez nos experts en stratégie Marketing et communication !
				</Typography>
				<Typography
					sx={{
						fontSize: '1.2rem',
					}}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
					reprehenderit voluptate illo ex sed necessitatibus, laboriosam
					dignissimos, beatae dolorem incidunt maxime recusandae facere quo
					temporibus dolore pariatur ullam esse quia quis error magni tempore
					ab? Voluptates et asperiores amet quo laudantium repudiandae
					aspernatur hic perferendis illum? Quo, sequi magni voluptatem in
					ducimus amet. Porro, pariatur. Maiores, sit possimus, quam molestiae
					cupiditate eum similique dicta nisi quo assumenda quibusdam delectus
					id, vel ratione tempore vitae.
				</Typography>
				<CustomButton
					sx={{
						my: 5,
					}}>
					En savoir +
				</CustomButton>
			</Box>

			<TeamMember />
		</Box>
	);
};
