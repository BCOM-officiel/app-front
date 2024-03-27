import { Box } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

export default function Portfolio({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        "> *": {
          maxWidth: "100%",
          height: "360px",
          objectFit: "cover",
          flexGrow: 1,
        },
      }}
    >
      {children}
    </Box>
  );
}
