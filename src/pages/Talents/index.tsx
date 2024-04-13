import { Box, Container } from "@mui/material";
import React from "react";
import talentListJson from "./mockup.json";
import TalentCard from "../../components/TalentCard";

export default function Talents() {
  const talentList: any[] = talentListJson.data;

  console.log(talentList);

  return (
    <Box sx={{ marginBottom: "120px" }}>
      <Box sx={{ height: "800px", mb: 5, background: "gray" }} />
      <Container maxWidth="xl" sx={{ gap: 4 }}>
        {talentList.map(({ attributes: { id, card, headline } }) => (
          <TalentCard
            key={id}
            id={id}
            name={`${card.firstname} ${card.lastname}`}
            job={card.job ? card.job : "Looking for job"}
            picture={headline.picture.url}
          />
        ))}
      </Container>
    </Box>
  );
}
