import { Box, Container, Typography } from "@mui/material";
import TalentCard from "../../components/TalentCard";
import useApi from "../../hooks/useApi";
import { Profile } from "../../types/profile";
import imgHeader from "../../assets/art.jpg";
import { useNavigate } from "react-router-dom";

export default function Talents() {
  const { data, isLoading, error } = useApi<Profile[]>(
    `profiles?populate[0]=card.places&populate[1]=headline&populate[2]=socials&populate[3]=skills&populate[4]=portfolio&populate[5]=headline.picture`
  );

  const navigate = useNavigate();

  return (
    <Box sx={{ marginBottom: "120px" }}>
      <Box
        sx={{
          height: "800px",
          mb: 5,
          background: `linear-gradient(to top, rgba(0,0,0,0.2), transparent 30%, #000), url(${imgHeader}) center / cover`,
        }}
      />
      <Container
        maxWidth="xl"
        sx={{ gap: 4, minHeight: "50vh", display: "flex", flexWrap: "wrap" }}
      >
        {isLoading ? (
          <Typography>Veuillez patienter...</Typography>
        ) : error ? (
          <Typography>Une erreur s'est produite.</Typography>
        ) : (
          data &&
          data.map(({ id, attributes: { card, headline } }) => (
            <Box
              key={id}
              onClick={() => navigate(`/talents/${id}`)}
              sx={{ cursor: "pointer" }}
            >
              <TalentCard
                id={id}
                name={`${card.firstname} ${card.lastname}`}
                job={card.jobs ? card.jobs : "Looking for job"}
                picture={`${process.env.REACT_APP_DOCUMENTS_URI}${headline.picture.data?.attributes?.url}`}
              />
            </Box>
          ))
        )}
      </Container>
    </Box>
  );
}
