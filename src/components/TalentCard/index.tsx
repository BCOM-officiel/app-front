import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface TalentCardProps {
  talentId: number;
  talentName: string;
  talentProfession: string;
  alt: string;
  src: string;
}

const TalentCard = ({
  talentId,
  talentName,
  talentProfession,
  alt,
  src,
}: TalentCardProps) => {
  const textSx = {
    color: "#333",
    textDecorationColor: "#777",
    fontSize: "0.9rem",
  };

  return (
    <Box sx={{}}>
      <Box
        component="img"
        alt={alt}
        src={src}
        sx={{
          boxShadow: 3,
          aspectRatio: "7/8",
          mb: 1,
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />
      <Typography component="span" fontWeight="700" sx={{ ...textSx }}>
        {talentName}{" "}
      </Typography>
      <Typography component="span" fontWeight="600">
        <Link
          component={RouterLink}
          to={`/talents/${talentId}`}
          sx={{ ...textSx }}
        >
          {talentProfession}
        </Link>
      </Typography>
    </Box>
  );
};

export default TalentCard;
