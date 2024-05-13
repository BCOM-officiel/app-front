// Header.js
import React from "react";
import { useLocation } from "react-router-dom";
import HeaderHome from '../HeaderHome'
import HeaderOthers from "../HeaderOthers";


const Header = () => {
  const location = useLocation();

  // Vérifiez l'URL actuelle et choisissez l'en-tête en conséquence
  if (location.pathname === "/") {
    return <HeaderHome />;
  } else {
    return <HeaderOthers />;
  }
};

export default Header;
