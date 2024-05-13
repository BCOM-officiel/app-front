import Hero from "./Hero";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../../components/button";
import Carousel from "../../components/Carousel/index";
import CarouselItem from "../../components/Carousel/CarouselItem";
import TeamMember from "./TeamMember";
import Presentation from "./Presentation";
import Evenement from "./Evenement";
import useApi from "../../hooks/useApi";
import { Profile } from "../../types/profile";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useApi<Profile[]>(
    `profiles?populate[0]=card.places&populate[1]=headline&populate[2]=socials&populate[3]=skills&populate[4]=portfolio&populate[5]=headline.picture`
  );

  return (
    <Box
      sx={{
        background: "#eee",
      }}
    >
      <Hero />
      <Presentation />
      {isLoading ? (
        <Typography sx={{ py: "80px", textAlign: "center" }}>
          Veuillez patienter...
        </Typography>
      ) : error ? (
        <Typography sx={{ py: "80px", textAlign: "center" }}>
          Une erreur s'est produite.
        </Typography>
      ) : (
        <Carousel
          sx={{
            mb: "128px",
          }}
        >
          {data &&
            data.map(({ id, attributes: { card, headline } }) => (
              <Box
                key={id}
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(`/talents/${id}`)}
              >
                <CarouselItem
                  talentId={id}
                  talentName={`${card.firstname} ${card.lastname}`}
                  talentProfession={card.jobs ? card.jobs : "Looking for job"}
                  src={`${process.env.REACT_APP_DOCUMENTS_URI}${headline.picture.data?.attributes?.url}`}
                  alt={`Photo de ${card.firstname} ${card.lastname}`}
                />
              </Box>
            ))}
        </Carousel>
      )}
      <Container sx={{ mb: "120px" }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "'PT Sans Narrow', sans-serif",
            fontSize: "48px",
            marginBottom: "16px",
            mt: "100px",
          }}
        >
          Concept
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: "1.2rem",
          }}
        >
          <p>
            <strong>B'COM</strong> réinvente la manière dont nous{" "}
            <strong>découvrons et soutenons</strong> les talents émergents grâce
            à une <strong>approche numérique novatrice</strong>. Notre concept
            allie
            <strong>dynamisme et modernité</strong>. Nous offrons une{" "}
            <strong>plateforme dynamique</strong> où les{" "}
            <strong>talents peuvent briller et trouver leur public</strong>,
            tout en bénéficiant d'une <strong>visibilité accrue</strong>. Avec
            une communication entièrement digitale, B'COM ouvre de nouvelles
            voies pour que les talents méritants puissent s'épanouir et
            prospérer.
          </p>
          <p>
            <em>
              Découvrez l'avenir de la découverte de talents avec B'COM dès
              aujourd'hui
            </em>
          </p>
        </Typography>
      </Container>
      <Evenement />
      <Container maxWidth="lg" sx={{ my: "120px" }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "'PT Sans Narrow', sans-serif",
            fontSize: "48px",
            my: 2,
          }}
        >
          La Team B'COM
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: "1.5rem",
            my: 2,
          }}
        >
          Rencontrez notre équipe !
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
          }}
          component="div"
        >
          Plongez dans l'épique et découvrez le talent à l'état pur ! Notre
          équipe de jeunes motivés, composée de 10 membres passionnés, se divise
          en trois pôles essentiels : le Pôle Marketing/Communication, le Pôle
          Informatique, et le Pôle Création Design. Rejoigneznous dès maintenant
          pour explorer l'univers captivant de B'COM.
        </Typography>
        <CustomButton
          sx={{
            my: 5,
          }}
        >
          En savoir +
        </CustomButton>
      </Container>

      <TeamMember />
    </Box>
  );
};
