import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import logoBCOM from '../../assets/LogoBCOM.png';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Header = () => {
	const navigate = useNavigate();
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [selectedButton, setSelectedButton] = React.useState('');

	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	const LinkDevenir = (
		<>
			<Button
				className={`${styles.navButton} ${
					selectedButton ? styles.selectedWithBar : ''
				}`}
				onClick={() => navigate('devenir-talent')}
				sx={{ color: '#DF4638', fontWeight: 800 }}>
				Devenir talent B'Com
			</Button>
		</>
	);

	const LinksRight = (
		<>
			<Button
				className={`${styles.navButton} ${
					selectedButton ? styles.selectedWithBar : ''
				}`}
				onClick={() => navigate('contact')}
				color='inherit'
				sx={{ mr: 4, fontWeight: 800 }}>
				Contact
			</Button>
		</>
	);

	const LinksLeft = (
		<>
			<Button
				className={`${styles.navButton} ${
					selectedButton ? styles.selectedWithBar : ''
				}`}
				onClick={() => navigate('home')}
				color='inherit'
				sx={{ mx: 4, fontWeight: 800 }}>
				Home
			</Button>
			<Button
				className={`${styles.navButton} ${
					selectedButton ? styles.selectedWithBar : ''
				}`}
				onClick={() => navigate('talents')}
				color='inherit'
				sx={{ mr: 4, fontWeight: 800 }}>
				Talents
			</Button>
			<Button
				className={`${styles.navButton} ${
					selectedButton ? styles.selectedWithBar : ''
				}`}
				onClick={() => navigate('evenement')}
				color='inherit'
				sx={{ mr: 4, fontWeight: 800 }}>
				Évènement
			</Button>
			<Button
				className={`${styles.navButton} ${
					selectedButton ? styles.selectedWithBar : ''
				}`}
				onClick={() => navigate('equipe')}
				color='inherit'
				sx={{ mr: 4, fontWeight: 800 }}>
				Équipe
			</Button>
		</>
	);

	const LinksMobile = (
		<>
			<ListItem onClick={() => navigate('home')}>
				<ListItemText primary='Home' />
			</ListItem>
			<ListItem onClick={() => navigate('talents')}>
				<ListItemText primary='Talents' />
			</ListItem>
			<ListItem onClick={() => navigate('evenement')}>
				<ListItemText primary='Évènement' />
			</ListItem>
			<ListItem onClick={() => navigate('equipe')}>
				<ListItemText primary='Équipe' />
			</ListItem>
			<ListItem onClick={() => navigate('contact')}>
				<ListItemText primary='Contact' />
			</ListItem>
			<ListItem onClick={() => navigate('devenir-talent')}>
				<ListItemText primary="Devenir talent B'Com" />
			</ListItem>
		</>
	);

	return (
		<Box>
			<AppBar
				className={styles.container}
				position='static'
				sx={{ background: 'transparent', boxShadow: 'none' }}>
				<Toolbar
					sx={{
						display: { xs: 'flex', md: 'flex' },
						justifyContent: 'space-between',
						alignItems: 'end',
					}}>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Typography
							variant='h6'
							component='div'>
							<img
								onClick={() => navigate('/')}
								className={styles.logo}
								src={logoBCOM}
								alt=''
							/>
						</Typography>
						<Box
							sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'end' }}>
							{LinksLeft}
						</Box>
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{LinksRight}
						{LinkDevenir}
					</Box>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						className={styles.menuButton}
						sx={{ mr: 2, display: { md: 'none' } }}
						onClick={handleDrawerOpen}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor='right'
				open={drawerOpen}
				onClose={handleDrawerClose}>
				<List>{LinksMobile}</List>
			</Drawer>
		</Box>
	);
};

export default Header;
