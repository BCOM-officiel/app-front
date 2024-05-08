import Hero from "./Hero";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../components/button";
import Carousel from "../../components/Carousel/index";
import CarouselItem from "../../components/Carousel/CarouselItem";
import TeamMember from "./TeamMember";
import Presentation from "./Presentation";
import Evenement from "./Evenement";
import useApi from "../../hooks/useApi";
import { Profile } from "../../types/profile";

export const Home = () => {
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
      <Box
        sx={{
          mx: "120px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'PT Sans Narrow', sans-serif",
            fontSize: "48px",
            my: 2,
          }}
        >
          Nos Talents
        </Typography>
        {isLoading ? (
          <Typography>Veuillez patienter...</Typography>
        ) : error ? (
          <Typography>Une erreur s'est produite.</Typography>
        ) : (
          <Carousel
            sx={{
              mb: "128px",
            }}
          >
            {data &&
              data.map(({ id, attributes: { card, headline } }) => (
                <CarouselItem
                  key={id}
                  talentId={id}
                  talentName={`${card.firstname} ${card.lastname}`}
                  talentProfession={card.jobs ? card.jobs : "Looking for job"}
                  src={`${process.env.REACT_APP_DOCUMENTS_URI}${headline.picture.data.attributes.url}`}
                  alt={`Photo de ${card.firstname} ${card.lastname}`}
                />
              ))}
            {data &&
              data.map(({ id, attributes: { card, headline } }) => (
                <CarouselItem
                  key={id}
                  talentId={id}
                  talentName={`${card.firstname} ${card.lastname}`}
                  talentProfession={card.jobs ? card.jobs : "Looking for job"}
                  src={`${process.env.REACT_APP_DOCUMENTS_URI}${headline.picture.data.attributes.url}`}
                  alt={`Photo de ${card.firstname} ${card.lastname}`}
                />
              ))}
            {data &&
              data.map(({ id, attributes: { card, headline } }) => (
                <CarouselItem
                  key={id}
                  talentId={id}
                  talentName={`${card.firstname} ${card.lastname}`}
                  talentProfession={card.jobs ? card.jobs : "Looking for job"}
                  src={`${process.env.REACT_APP_DOCUMENTS_URI}${headline.picture.data.attributes.url}`}
                  alt={`Photo de ${card.firstname} ${card.lastname}`}
                />
              ))}
          </Carousel>
        )}
      </Box>
      <Evenement />
      <Box
        sx={{
          my: "120px",
          px: "120px",
          maxWidth: "996px",
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
          La Team B'COM
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: "1.5rem",
            my: 2,
          }}
        >
          Rencontrez nos experts en stratégie Marketing et communication !
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          reprehenderit voluptate illo ex sed necessitatibus, laboriosam
          dignissimos, beatae dolorem incidunt maxime recusandae facere quo
          temporibus dolore pariatur ullam esse quia quis error magni tempore
          ab? Voluptates et asperiores amet quo laudantium repudiandae
          aspernatur hic perferendis illum? Quo, sequi magni voluptatem in
          ducimus amet. Porro, pariatur. Maiores, sit possimus, quam molestiae
          cupiditate eum similique dicta nisi quo assumenda quibusdam delectus
          id, vel ratione tempore vitae.
        </Typography>
        <CustomButton
          sx={{
            my: 5,
          }}
        >
          En savoir +
        </CustomButton>
      </Box>

      <TeamMember />
    </Box>
  );
};
