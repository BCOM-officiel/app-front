import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import CustomButton from "../button";

type Props = {
  id: number;
  name: string;
  job: string;
  picture: string;
};

export default function index({ id, name, job, picture }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "360px",
        background: "#FFF",
      }}
    >
      <Box
        component="img"
        src={picture}
        sx={{
          aspectRatio: "1",
          objectFit: "cover",
        }}
        mb={5}
      />
      <Typography
        component="h6"
        fontWeight="700"
        fontSize={22}
        align="center"
        color="#333"
      >
        {name}
      </Typography>
      <Typography component="p" fontWeight="500" fontSize={18} align="center">
        <Link
          component={RouterLink}
          to={`/talents/${id}`}
          sx={{
            color: "#333",
            textDecorationColor: "#777",
          }}
        >
          {job}
        </Link>
      </Typography>
      <CustomButton
        sx={{
          my: 2,
          mx: "auto",
          boxShadow: "none",
        }}
      >
        En savoir +
      </CustomButton>
    </Box>
  );
}
