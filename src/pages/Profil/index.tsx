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
  const portfolioImages = data?.attributes?.portfolio.map(
    (item) => item.image?.data?.attributes.url
  );

  return (
    <Container sx={{ pt: "160px", mb: "140px" }} maxWidth="xl">
      {isLoading ? (
        <Typography>"Veuillez patienter..."</Typography>
      ) : error ? (
        <Typography>"Une erreur s'est produite."</Typography>
      ) : (
        data && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                alignContent="center"
                paddingRight={{ xs: 0, md: "100px" }}
                marginBottom={{ xs: "20px", md: 0 }}
                textAlign={{ xs: "center", md: "initial" }}
              >
                <Typography variant="h3">
                  {data.attributes.headline.title}
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  {data.attributes.headline.subtitle}
                </Typography>
              </Box>
              <Box
                margin={{ xs: "auto" }}
                sx={{ "@media(min-width: 900px)": { maxWidth: "50%" } }}
              >
                <img
                  src={imgUrl(
                    data.attributes.headline.picture.data?.attributes?.url
                  )}
                  alt="profil"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },

                mt: 4,
                mb: 6,
              }}
            >
              <Box sx={{ flex: 1, pr: { xs: 0, md: 5 } }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  A propos
                </Typography>
                <Typography variant="body1">{data.attributes.about}</Typography>
              </Box>
              <Box sx={{ pl: { xs: 0, md: 5 } }}>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: 4,
                    py: { xs: 2, md: 2 },
                    px: { xs: 0, md: 2 },
                    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    mb: { xs: 4, md: 15 },
                    mx: { xs: 0, md: "50px" },
                    mt: { xs: 5, md: 5 },
                  }}
                >
                  <Box>
                    <Typography variant="body1">Nom Prénom:</Typography>
                    <Typography variant="body1">Métier:</Typography>
                    <Typography variant="body1">Localisation:</Typography>
                  </Box>
                  <Box textAlign="end">
                    <Typography variant="body1">
                      {data.attributes.card.lastname}{" "}
                      {data.attributes.card.firstname}
                    </Typography>
                    <Typography variant="body1">
                      {data.attributes.card.jobs}
                    </Typography>
                    {places?.map((place) => (
                      <Typography
                        component="span"
                        sx={{
                          backgroundColor: "#164462",
                          borderRadius: 4,
                          color: "white",
                          padding: "3px 8px",
                          fontSize: 12,
                          fontWeight: 600,
                          mr: 1,
                        }}
                      >
                        {place}
                      </Typography>
                    ))}
                  </Box>
                </Box>
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
                      variant="h4"
                      sx={{
                        width: { xs: "30px", md: "50px" },
                        textAlign: "left",
                        color: "#B3B3B3",
                      }}
                    >{`${(index + 1).toString().padStart(2, "0")}`}</Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "30px", md: "40px" },
                        flexGrow: 1,
                        textAlign: { xs: "center", md: "left" },
                        ml: { xs: 2, md: 4 },
                        textTransform: "capitalize",
                      }}
                    >
                      {skill.toLowerCase()}
                    </Typography>
                    <Box
                      sx={{
                        ml: { xs: 2, md: 4 },
                        width: { xs: "15px", md: "30px" },
                        height: { xs: "15px", md: "30px" },
                        borderRadius: "50%",
                        backgroundColor: "#ff0000",
                      }}
                    />
                  </Box>
                ))}
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
