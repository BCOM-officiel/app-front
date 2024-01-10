import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoBCOM from '../../assets/LogoBCOM.png';
import classes from './Header.module.css';

const pageGauches: PageType[] = ['Home', 'Talents', 'Évènement', 'Équipe'];
const pageDroites: PageType[] = ['Contact'];
const pageDevenir = ["Devenir talent B'Com "];

type PageType =
	| 'Home'
	| 'Talents'
	| 'Évènement'
	| 'Équipe'
	| 'Contact'
	| "Devenir talent B'Com ";

const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const [selectedButton, setSelectedButton] = React.useState('');

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleButtonClick = (clickedPage: string) => {
		setSelectedButton(clickedPage);
	};

	return (
		<AppBar
			position='static'
			sx={{ background: 'transparent', boxShadow: 'none' }}>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{ alignItems: 'normal' }}>
					<Box>
						<img
							className={classes.logo}
							src={logoBCOM}
							alt='logo BCOM'
						/>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {
									xs: 'block',
									md: 'none',
									textTransform: 'none',
									fontWeight: 800,
								},
							}}>
							{pageGauches.map((pageGauche) => (
								<MenuItem
									key={pageGauche}
									onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{pageGauche}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						LOGO
					</Typography>
					<Box
						sx={{
							marginLeft: 5,
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							alignItems: 'flex-end',
						}}>
						{pageGauches.map((pageGauche) => (
							<Button
								className={`${classes.navButton} ${
									selectedButton === pageGauche ? classes.selectedWithBar : ''
								}`}
								key={pageGauche}
								onClick={() => {
									handleButtonClick(pageGauche);
									handleCloseNavMenu();
								}}
								sx={{
									marginRight: 3,
									color: 'white',
									display: 'block',
									textTransform: 'none',
									fontWeight: selectedButton === pageGauche ? 'bold' : 'normal',
								}}
								variant='text'>
								{pageGauche}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0, alignItems: 'flex-end', display: 'flex' }}>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pageDroites.map((pageDroite) => (
								<Button
									className={`${classes.navButton} ${
										selectedButton === pageDroite ? classes.selectedWithBar : ''
									}`}
									key={pageDroite}
									onClick={() => {
										handleButtonClick(pageDroite);
										handleCloseNavMenu();
									}}
									sx={{
										marginRight: 5,
										color: 'white',
										display: 'block',
										textTransform: 'none',
										fontWeight: 800,
									}}>
									{pageDroite}
								</Button>
							))}
							<Button
								className={classes.navButton}
								onClick={handleCloseNavMenu}
								sx={{
									color: '#DF4638',
									display: 'block',
									textTransform: 'none',
									fontWeight: 800,
								}}>
								{pageDevenir}
							</Button>
						</Box>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
