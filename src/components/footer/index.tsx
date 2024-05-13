import {
  Grid,
  Typography,
  Link,
  Box,
  TextField,
  Button,
  Container,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

type Page = {
  title: string;
  url: string;
};

type PageProps = {
  pages: Page[];
};


const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <Box
      sx={{
        "& svg": {
          transition: "transform 0.5s",
          transformOrigin: "center",
          width: "50px",
          height: "50px",
          "&:hover": {
            transform: "scale(1.5)",
          },
        },
      }}
    >
      <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    </Box>
  );
};

export default function Footer({ pages }: PageProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#1a4362",
      }}
    >
      <Container maxWidth="xl" component="footer" sx={{ py: 5 }}>
        <Grid
          container
          spacing={4}
          alignItems={"flex-start"}
          //sx={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h5"
              mb={3}
              align="left"
              fontWeight={"bold"}
              color="white"
              gutterBottom
            >
              B'Com
            </Typography>
            <Typography
              color="white"
              align="left"
              fontSize={15}
              sx={{ maxWidth: "320px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} alignContent={"center"}>
            <Typography
              variant="h5"
              mb={3}
              color="white"
              gutterBottom
              align="left"
              fontWeight={"bold"}
            >
              Pages
            </Typography>
            {pages.map((page) => (
              <Link
                key={page.title}
                href={page.url}
                align="left"
                mt={1}
                fontSize={15}
                sx={{
                  textDecoration: "none",
                  color: "#848482",
                  display: "block",
                  marginBottom: 1,
                  fontSize: 15,
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {page.title}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} sm={3} alignContent={"center"}>
            <Typography
              variant="h5"
              mb={3}
              color="white"
              fontWeight={"bold"}
              align="left"
              gutterBottom
            >
              Contact
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              mt={1}
              fontSize={15}
              color="#848482"
            >
              Adresse postale
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              mt={1}
              fontSize={15}
              color="#848482"
            >
              Email
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              mt={1}
              fontSize={15}
              color="#848482"
            >
              Téléphone
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h5"
              mb={3}
              color="white"
              gutterBottom
              align="left"
              fontWeight={"bold"}
            >
              Réseaux sociaux
            </Typography>
            <Typography fontSize={15} color="white" mt={2} align="left">
              Retrouvez-nous sur nos réseaux sociaux
            </Typography>
            <Box mt={2} sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Link href="#" sx={{ marginRight: 2 }}>
                <InstagramIcon
                  sx={{
                    marginRight: 1,
                    color: "white",
                    fontSize: "50px",
                    transition: "0.5s",
                    "&:hover": { transform: "scale(1.5)" },
                  }}
                />
              </Link>
              <Link href="#" sx={{ marginRight: 2 }}>
                <TikTokIcon color="white" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid
            item
            sm={6}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Typography variant="caption" color="white">
              ©2023 B'COM - TOUS DROITS RÉSERVÉS
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Typography variant="caption" color="white">
              <Link
                href="#"
                fontSize={15}
                sx={{
                  marginRight: 2,
                  textDecoration: "none",
                  color: "white",
                  transition: "color 0.3s",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                fontSize={15}
                sx={{
                  marginRight: 2,
                  textDecoration: "none",
                  color: "white",
                  transition: "color 0.3s",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                fontSize={15}
                sx={{
                  marginRight: 2,
                  textDecoration: "none",
                  color: "white",
                  transition: "color 0.3s",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Cookies
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
