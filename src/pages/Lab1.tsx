import React from "react";
import { Box } from "@mui/material";
import TalentCard from "../components/TalentCard";
import pic from "../assets/pexels-karolina-grabowska-4471894.jpg";

export const Lab1 = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        alignContent: "center",
        minHeight: "100vh",
        background: "rgb(0 0 0 / 0.1 )",
      }}
    >
      <TalentCard
        id={1}
        name="Laura Dupont"
        picture={pic}
        job="Artiste Graphiste Webdesigner"
      />
    </Box>
  );
};
