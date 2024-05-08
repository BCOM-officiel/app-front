import React from "react";
import { Typography, Box, SxProps } from "@mui/material";

type ProfileCardProps = {
  firstName: string;
  profession: string;
  imageUrl: string;
  color: string;
  textColor: string;
  sxImg?: SxProps;
};

const TeamMemberCard: React.FC<ProfileCardProps> = ({
  firstName,
  profession,
  imageUrl,
  color,
  textColor,
  sxImg = {},
}) => {
  return (
    <Box sx={{ backgroundColor: color, borderRadius: "0", width: "100%" }}>
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ marginTop: 10, color: `${textColor}` }}
        >
          {firstName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: `${textColor}`, textDecoration: "underline" }}
        >
          {profession}
        </Typography>
      </Box>
      <Box
        component="img"
        src={imageUrl}
        alt={`${firstName}`}
        sx={{
          height: "600px",
          width: "100%",
          objectFit: "contain",
          objectPosition: "bottom",
          display: "block",
          ...sxImg,
        }}
      />
    </Box>
  );
};

export default TeamMemberCard;
