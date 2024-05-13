import { Grid, Typography, Box, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormInput from "../FormInput";
import FormText from "../FormText";
import FormSubmit from "../FormSubmit";
import teamImage from '../../assets/Bannière.pageéquipe.png';

export default function ContactTeamForm() {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", p: 2 }}>
      <FormControl
        component="form"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ p: 14 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#1a4362"
              sx={{ textTransform: "uppercase", mb: 2 }}
            >
              Contact .
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ textTransform: "uppercase", mb: 10 }}
            >
              Contacter l'équipe B'COM
            </Typography>
            <Box sx={{ gap: 2 }}>
            <Typography fontWeight="bold" variant="h6" sx={{ mb: 2 }}>
              Coordonnées _
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box><FormInput label="Prénom" required /></Box>
              <Box><FormInput label="Nom" required /></Box>
              <Box><FormInput label="Date de naissance" required /></Box>
              <Box><FormInput label="Email" required /></Box>
              <Box><FormInput label="Téléphone" required /></Box>
            </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            
              <Box
                component="img"
                src={teamImage}
                alt="L'équipe B'COM"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  marginBottom: "20px",
                }}
              />
            <FormText label="Message _" required />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
              <FormSubmit>Envoyer</FormSubmit>
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
}
