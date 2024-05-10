import { Box, Container, Typography } from "@mui/material";
import TalentCard from "../../components/TalentCard";
import useApi from "../../hooks/useApi";
import { Profile } from "../../types/profile";

export default function Talents() {
  const { data, isLoading, error } = useApi<Profile[]>(
    `profiles?populate[0]=card.places&populate[1]=headline&populate[2]=socials&populate[3]=skills&populate[4]=portfolio&populate[5]=headline.picture`
  );

  return (
    <Box sx={{ marginBottom: "120px" }}>
      <Box sx={{ height: "800px", mb: 5, background: "gray" }} />
      <Container maxWidth="xl" sx={{ gap: 4, minHeight: "50vh" }}>
        {isLoading ? (
          <Typography>Veuillez patienter...</Typography>
        ) : error ? (
          <Typography>Une erreur s'est produite.</Typography>
        ) : (
          data &&
          data.map(({ id, attributes: { card, headline } }) => (
            <TalentCard
              key={id}
              id={id}
              name={`${card.firstname} ${card.lastname}`}
              job={card.jobs ? card.jobs : "Looking for job"}
              picture={`${process.env.REACT_APP_DOCUMENTS_URI}${headline.picture.data?.attributes?.url}`}
            />
          ))
        )}
      </Container>
    </Box>
  );
}
