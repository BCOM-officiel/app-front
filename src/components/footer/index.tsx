import React from 'react';
import { Grid, Typography, Link, Box, TextField, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        padding: 6,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            B'Com
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed non risus. Suspendisse
            lectus tortor, dignissim sit amet,
            adipiscing nec, ultricies sed, dolor. Cras
            elementum ultrices diam. Maecenas ligula
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Retrouvez-nous sur nos réseaux sociaux
            </Typography>
          <Link href="#" sx={{ marginRight: 2 }}>
            <InstagramIcon sx={{ marginRight: 1 }} />
          </Link>
          <Link href="#" sx={{ marginRight: 2 }}>
            <PinterestIcon sx={{ marginRight: 1 }} />
          </Link>
          <Link href="#" sx={{ marginRight: 2 }}>
            <LinkedInIcon sx={{ marginRight: 1 }} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Pages
          </Typography>
          <Link href="#" sx={{ display: 'block', marginBottom: 1 }}>Accueil</Link>
          <Link href="#" sx={{ display: 'block', marginBottom: 1 }}>Talents</Link>
          <Link href="#" sx={{ display: 'block', marginBottom: 1 }}>Événements</Link>
          <Link href="#" sx={{ display: 'block', marginBottom: 1 }}>Équipe</Link>
        </Grid>
        {/* Section Contact et Newsletter */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contact
          </Typography>
          <Typography variant="subtitle1">Adresse postale</Typography>
          <Typography variant="subtitle1">Email</Typography>
          <Typography variant="subtitle1">Téléphone</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              S'inscrire à la Newsletter
            </Typography>
            <TextField
              fullWidth
              placeholder="Votre adresse email"
              size="small"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth>
              S'abonner
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="caption">
          ©2023 JLGRAPHISTES - TOUS DROITS RÉSERVÉS
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
