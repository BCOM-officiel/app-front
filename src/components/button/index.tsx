import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButton: React.FC<ButtonProps> = ({
  children,
  sx = {},
  ...props
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "unset",
        fontSize: "1.1rem",
        px: 4,
        fontWeight: 700,
        borderRadius: "9999999px", // This rounds corners
        backgroundColor: "#eda44d",
        color: "#fff",
        ":hover": {
          backgroundColor: "#222",
          color: "#fff",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
