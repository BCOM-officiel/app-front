import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import logoBCOM from "../../assets/LogoBCOM.png";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedButton, setSelectedButton] = React.useState("");

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const LinkDevenir = (
    <>
      <Button
        variant="contained"
        className={`${styles.navButton} ${
          selectedButton ? styles.selectedWithBar : ""
        }`}
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "#eda44d",
          fontWeight: 800,
          ":hover": { backgroundColor: "#104262" },
        }}
      >
        Devenir talent B'Com
      </Button>
    </>
  );

  const goTo = (to: string) => {
    navigate(to);
    handleDrawerClose();
  };

  const LinksLeft = (
    <>
      <Button
        className={`${styles.navButton} ${
          selectedButton ? styles.selectedWithBar : ""
        }`}
        onClick={() => navigate("/")}
        sx={{ mx: 4, fontWeight: 800, color: "#104262" }}
      >
        Home
      </Button>
      <Button
        className={`${styles.navButton} ${
          selectedButton ? styles.selectedWithBar : ""
        }`}
        onClick={() => navigate("talents")}
        sx={{ mr: 4, fontWeight: 800, color: "#104262" }}
      >
        Talents
      </Button>
      {/* <Button
        className={`${styles.navButton} ${
          selectedButton ? styles.selectedWithBar : ""
        }`}
        onClick={() => navigate("evenement")}
        sx={{ mr: 4, fontWeight: 800, color: "#104262" }}
      >
        Évènement
      </Button> */}
      {/* <Button
        className={`${styles.navButton} ${
          selectedButton ? styles.selectedWithBar : ""
        }`}
        onClick={() => navigate("equipe")}
        sx={{ mr: 4, fontWeight: 800, color: "#104262" }}
      >
        Équipe
      </Button> */}
      <Button
        className={`${styles.navButton} ${
          selectedButton ? styles.selectedWithBar : ""
        }`}
        onClick={() => navigate("contact")}
        sx={{ mr: 4, fontWeight: 800, color: "#104262" }}
      >
        Contact
      </Button>
    </>
  );

  const LinksMobile = (
    <>
      <ListItem onClick={() => goTo("/")}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem onClick={() => goTo("talents")}>
        <ListItemText primary="Talents" />
      </ListItem>
      {/* <ListItem onClick={() => navigate("evenement")}>
        <ListItemText primary="Évènement" />
      </ListItem>
      <ListItem onClick={() => navigate("equipe")}>
        <ListItemText primary="Équipe" />
      </ListItem> */}
      <ListItem onClick={() => goTo("contact")}>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem onClick={() => goTo("/")}>
        <ListItemText primary="Devenir talent B'Com" />
      </ListItem>
    </>
  );

  return (
    <>
      <AppBar
        className={styles.container}
        position="absolute"
        sx={{ boxShadow: "none", backgroundColor: "transparent" }}
      >
        <Toolbar
          sx={{
            display: { xs: "flex", md: "flex" },
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography variant="h6" component="div">
              <img
                onClick={() => navigate("/")}
                className={styles.logo}
                src={logoBCOM}
                alt=""
              />
            </Typography>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "end" }}
            >
              {LinksLeft}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>{LinkDevenir}</Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.menuButton}
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <List>{LinksMobile}</List>
      </Drawer>
    </>
  );
};

export default Header;
