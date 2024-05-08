import { Typography, Box } from "@mui/material";
import CustomButton from "../../../components/button";
import imgEvent1 from "../../../assets/imgEvent1.png";
import imgEvent2 from "../../../assets/imgEvent2.png";

const Evenement = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#164462",
        color: "#fff",
        py: 5,
        px: "120px",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: "'PT Sans Narrow', sans-serif",
          fontSize: "48px",
          my: 2,
        }}
      >
        Évenements.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          overflowX: "hidden",
        }}
      >
        <Typography
          sx={{
            flex: "1 0 500px",
            fontSize: "1.2rem",
          }}
        >
          Nous sommes ravis de vous annoncer notre événement exceptionnel, une
          célébration de l’innovation et de la créativité, réunissant les
          talents découverts. Cet événement sera une opportunité unique de
          découvrir une multitude de services et de produits innovants. Chaque
          talent se verra attribuer un stand dédié, offrant ainsi une expérience
          immersive pour le public. Venez rencontrer les visages derrière ces
          projets inspirants, échanger avec eux et découvrir les histoires
          fascinantes qui se cachent derrière chaque création. Cet événement
          sera bien plus qu’une simple exposition ; ce sera une véritable
          rencontre entre les talents et leur public, une occasion de tisser des
          liens et d’inspirer l’avenir. Rejoignez-nous pour célébrer
          l’ingéniosité et le talent sous toutes ses formes !
        </Typography>
        <Box
          component="img"
          sx={{
            "@media(min-width: 900px)": { display: "inline" },
            display: "none",
            objectFit: "cover",
            width: "600px",
          }}
          src={imgEvent1}
        />
        <Box
          component="img"
          sx={{
            "@media(min-width: 900px)": { display: "inline" },
            display: "none",
            objectFit: "cover",
            width: "600px",
          }}
          src={imgEvent2}
        />
      </Box>
      <CustomButton sx={{ mt: 5 }}>En savoir +</CustomButton>
    </Box>
  );
};

export default Evenement;
