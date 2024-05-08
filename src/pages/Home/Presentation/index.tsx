import { Container, Typography, Box } from "@mui/material";
import CustomButton from "../../../components/button";
import teamBcom from "../../../assets/TeamBcom.png";

const Presentation = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        <Box
          component="img"
          src={teamBcom}
          alt="team become"
          sx={{ maxWidth: "600px" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "32px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "'PT Sans Narrow', sans-serif",
            fontSize: "48px",
            marginBottom: "16px",
          }}
        >
          Salut ! Nous c'est B'COM
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Bienvenue sur B’COM, la vitrine digitale des talents où l’innovation
          rencontre la créativité. Nous sommes déterminés à mettre en lumière
          des profils exceptionnels à travers des vidéos et un contenu
          dynamique. Notre plateforme offre une visibilité inégalée aux talents
          méritants, propulsant leur carrière grâce à une communication 100%
          digitale. Rejoignez-nous pour découvrir et soutenir ces créateurs
          exceptionnels qui cherchent à émerger et à trouver leur public dans un
          monde numérique en constante évolution. B’COM, l’avenir des talents
          commence ici.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Aligner le bouton à droite
        }}
      >
        <CustomButton>En savoir +</CustomButton>
      </Box>
    </Container>
  );
};
export default Presentation;
