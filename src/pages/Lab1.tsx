import React from "react";
import TalentCard from "../components/TalentCard";
import { Box } from "@mui/material";
import logo from "./../logo.svg";
import Carousel from "../components/Carousel/index.back";

export const Lab1 = () => {
  return (
    <Box
      sx={{
        display: "grid",
        // placeItems: "center",
        alignContent: "center",
        minHeight: "100vh",
      }}
    >
      <Carousel
        slides={[
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
          <TalentCard
            talentId={2}
            talentName="Laura Dupont"
            talentProfession="Artiste Graphiste Webdesigner"
            src={logo}
            alt="someone"
          ></TalentCard>,
        ]}
      />
    </Box>
  );
};
