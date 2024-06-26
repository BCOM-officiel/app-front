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
        px: 2,
        "@media(min-width: 900px)": { pl: "120px", pr: 0 },
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
          "@media(min-width: 900px)": { display: "flex" },
          gap: 5,
        }}
      >
        <Typography
          sx={{
            flex: "1 1 40%",
            fontSize: "1.4rem",
          }}
          component="div"
        >
          <p>
            Nous sommes ravis de vous annoncer notre{" "}
            <strong>événement exceptionnel</strong>, une célébration de
            l'innovation et de la créativité, réunissant les
            <strong>talents découverts</strong>.
          </p>

          <p>
            Cet événement sera une <strong>opportunité unique</strong> de{" "}
            <strong>
              découvrir une multitude de services et de produits innovants
            </strong>
            .
          </p>

          <p>
            Chaque talent se verra attribuer un <strong>stand dédié</strong>,
            offrant ainsi une
            <strong>expérience immersive</strong> pour le public.
          </p>

          <p>
            Venez rencontrer les visages derrière ces{" "}
            <strong>projets inspirants</strong>,{" "}
            <strong>
              échanger avec eux et découvrir les histoires fascinantes
            </strong>{" "}
            qui se cachent derrière chaque création.
          </p>

          <p>
            Cet événement sera bien plus qu'une simple exposition ; ce sera une
            véritable{" "}
            <strong>rencontre entre les talents et leur public</strong>, une
            occasion de tisser des liens et d'inspirer l'avenir.
          </p>

          <p>
            <em>
              Rejoignez-nous pour célébrer l'ingéniosité et le talent sous
              toutes ses formes !
            </em>
          </p>
        </Typography>
        <Box
          sx={{
            flex: "1 1 60%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr min-content",
            gap: 5,
          }}
        >
          <Box
            component="img"
            sx={{
              "@media(min-width: 900px)": { display: "inline" },
              display: "none",
              objectFit: "cover",
              height: "100%",
            }}
            src={imgEvent1}
          />
          <Box
            component="img"
            sx={{
              "@media(min-width: 900px)": { display: "inline" },
              display: "none",
              objectFit: "cover",
              height: "100%",
            }}
            src={imgEvent2}
          />
          <CustomButton
            sx={{
              justifySelf: "right",
              alignSelf: "end",
              gridColumn: "1/-1",
              "@media(min-width: 900px)": { mr: "120px" },
            }}
          >
            En savoir +
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Evenement;
