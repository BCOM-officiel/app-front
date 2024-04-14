import { Box, Container, Typography } from "@mui/material";
import Portfolio from "../../components/Portfolio";
import CustomButton from "../../components/button";
import useApi from "../../hooks/useApi";
import { Profile } from "../../types/profile";
import { useParams } from "react-router-dom";
import imgUrl from "../../utils/imgUrl";

const Profil = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useApi<Profile>(
    `profiles/${id}?populate[0]=card.places&populate[1]=headline&populate[2]=socials&populate[3]=skills&populate[4]=portfolio&populate[5]=headline.picture&populate[6]=portfolio.image`
  );

  const skills = data?.attributes.skills.map((skill) => skill.name);
  const places = data?.attributes.card.places.map((place) => place.name);
  const portfolioImages = data?.attributes.portfolio.map(
    (item) => item.image.data.attributes.url
  );

  return (
    <Container
      sx={{
        pt: "160px",
        mb: "140px",
      }}
    >
      {isLoading ? (
        <Typography>"Veuillez patienter..."</Typography>
      ) : error ? (
        <Typography>"Une erreur s'est produite."</Typography>
      ) : (
        data && (
          <>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography variant="h3">
                  {data.attributes.headline.title}
                </Typography>
                <Typography variant="body1">
                  {data.attributes.headline.subtitle}
                </Typography>
              </Box>
              <Box>
                <img
                  src={imgUrl(
                    data.attributes.headline.picture.data.attributes.url
                  )}
                  alt="profil"
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", mt: 4, mb: 6 }}>
              <Box sx={{ flex: 1, pr: 5 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  A propos
                </Typography>
                <Typography variant="body1">{data.attributes.about}</Typography>
              </Box>
              <Box sx={{ pl: 5 }}>
                <Box
                  sx={{
                    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "transparent",
                    borderRadius: 4,
                    py: 3,
                    px: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box>
                      <Typography variant="body1">Nom Prénom:</Typography>
                      <Typography variant="body1">Métier:</Typography>
                      <Typography variant="body1">Localisation:</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" textAlign="end">
                        {data.attributes.card.lastname}
                        {data.attributes.card.firstname}
                      </Typography>
                      <Typography variant="body1" textAlign="end">
                        {data.attributes.card.jobs}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{
                          backgroundColor: "#164462",
                          borderRadius: 4,
                          color: "white",
                          textAlign: "center",
                          px: 1,
                          py: 0.5,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {places}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box mt={20}>
                  {skills?.map((skill, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid white",
                        pb: 4,
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          width: "50px",
                          textAlign: "left",
                          color: "#B3B3B3",
                        }}
                      >{`${(index + 1)
                        .toString()
                        .padStart(2, "0")}`}</Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          flexGrow: 1,
                          textAlign: "left",
                          ml: 4,
                          textTransform: "capitalize",
                        }}
                      >
                        {skill.toLowerCase()}
                      </Typography>
                      <Box
                        sx={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: "#ff0000",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ textAlign: "end", mb: 4 }}>
                Portfolio
              </Typography>
              <Portfolio>
                {portfolioImages?.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={imgUrl(image)}
                    alt="image portfolio"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.log(
                        "Erreur de chargement de l'image :",
                        target.src
                      );
                    }}
                  />
                ))}
              </Portfolio>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
              <CustomButton>
                Contactez {data.attributes.card.firstname}
              </CustomButton>
            </Box>
          </>
        )
      )}
    </Container>
  );
};

export default Profil;
