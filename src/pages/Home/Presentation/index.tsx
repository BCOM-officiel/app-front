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
          sx={{ width: "1000px" }}
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
          <p>
            Bienvenue sur <strong>B'COM</strong>, la{" "}
            <strong>
              vitrine digitale des talents où l'innovation rencontre la
              créativité
            </strong>
            . Nous sommes déterminés à
            <strong>mettre en lumière des profils exceptionnels</strong> à
            travers des vidéos et un contenu dynamique.
          </p>
          <p>
            Notre plateforme offre une{" "}
            <strong>visibilité inégalée aux talents méritants</strong>,
            propulsant leur carrière grâce à une{" "}
            <strong>communication 100% digitale</strong>. Rejoignez-nous pour
            découvrir et <strong>soutenir ces créateurs exceptionnels</strong>{" "}
            qui cherchent à émerger et à trouver leur public dans un monde
            numérique en constante évolution.
          </p>
          <p>
            <em>B'COM, l'avenir des talents commence ici.</em>
          </p>
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
