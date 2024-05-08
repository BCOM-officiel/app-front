import { Box, Typography } from "@mui/material";
import quadrillage from "../../../assets/quadrillage.png";
import ImageHero from "../../../assets/Image2Hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.2), transparent 30%, #eee), url(${ImageHero}) no-repeat center right`,
        minHeight: "100vh",
        px: 5,
        pt: "140px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          my: "auto",
          maxWidth: "max-content",
          mt: "120px",
        }}
      >
        <Box
          component="img"
          src={quadrillage}
          alt="hero"
          sx={{ opacity: 0.6 }}
        />
        <Typography
          variant="h1"
          sx={{
            mt: 5,
            color: "black",
            fontWeight: "bold",
            fontSize: "clamp(3rem, 5vw, 10rem)",
          }}
        >
          Trouvez votre talent
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
