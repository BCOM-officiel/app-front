import React from "react";
import Hero from "./Hero";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../../components/button";
import Carousel from "../../components/Carousel/index";
import CarouselItem from "../../components/Carousel/CarouselItem";
import picture from "../../assets/pexels-karolina-grabowska-4471894.jpg";


export const Home = () => {
  return (
    <Box
      sx={{
        background: "#eee",
      }}
    >
      <Hero />
      <Container maxWidth="lg">
        <Box
          component="img"
          sx={{
            marginTop: "-32px",
            width: "100%",
            aspectRatio: "2/1",
            background: "#555",
          }}
        />
        <Typography
          component="h2"
          sx={{
            fontFamily: "'PT Sans Narrow', sans-serif",
            fontSize: "48px",
            my: 2,
          }}
        >
          Salut ! Nous c'est B'COM
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 5,
            mb: "128px",
          }}
        >
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
              flexShrink: "0",
            }}
          >
            En savoir +
          </CustomButton>
        </Box>
      </Container>
      <Carousel
        sx={{
          mb: "128px",
        }}
      >
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        <CarouselItem
          talentId={2}
          talentName="Laura Dupont"
          talentProfession="Artiste Graphiste Webdesigner"
          src={picture}
          alt="someone"
        ></CarouselItem>
        ,
      </Carousel>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          sx={{
            fontFamily: "'PT Sans Narrow', sans-serif",
            fontSize: "48px",
            my: 2,
          }}
        >
          Concept
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            mb: "128px",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "120px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              aspectRatio: "1",
              borderRadius: "50%",
              fontSize: "1.2rem",
              fontWeight: 700,
              background: "#fff",
            }}
          >
            Étape 1
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              aspectRatio: "1",
              borderRadius: "50%",
              fontSize: "1.2rem",
              fontWeight: 700,
              background: "#fff",
            }}
          >
            Étape 2
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              aspectRatio: "1",
              borderRadius: "50%",
              fontSize: "1.2rem",
              fontWeight: 700,
              background: "#fff",
            }}
          >
            Étape 3
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          pl: "120px",
          backgroundColor: "#555",
          color: "#fff",
          py: 5,
        }}
      >
        <Typography
          component="h1"
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
            display: "grid",
            gridTemplateColumns: "2fr 4fr 3fr",
            gridTemplateRows: "600px 200px",
            gap: 5,
          }}
        >
          <Typography
            sx={{
              gridRow: "1 / -1",
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
            id, vel ratione tempore vitae. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Doloremque reprehenderit voluptate
            illo ex sed necessitatibus, laboriosam dignissimos, beatae dolorem
            incidunt maxime recusandae facere quo temporibus dolore pariatur
            ullam esse quia quis error magni tempore ab? Voluptates et
            asperiores amet quo laudantium repudiandae aspernatur hic
            perferendis illum? Quo, sequi magni voluptatem in ducimus amet.
            Porro, pariatur.
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              background: "#EEE",
            }}
          />
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              gridColumn: "3 / 4",
              background: "#EEE",
            }}
          />
          <CustomButton
            sx={{
              justifySelf: "flex-end",
              alignSelf: "center",
              gridColumn: "3 / 4",
              mr: "120px",
            }}
          >
            En savoir +
          </CustomButton>
        </Box>
      </Box>
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
    </Box>
  );
};
