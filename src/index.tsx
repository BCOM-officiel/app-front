import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TalentCard from "./components/TalentCard";
import logo from "./logo.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Carousel from "./components/Carousel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    // Pour test un composant rapidement. Ne pas garder pour la prod.
    path: "/lab-1",
    element: (
      <Box
        sx={{
          display: "grid",
          // placeItems: "center",
          alignContent: "center",
          minHeight: "100vh",
        }}
      >
        <Carousel
          slides={[
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
            <TalentCard
              talentId={2}
              talentName="Laura Dupont"
              talentProfession="Artiste Graphiste Webdesigner"
              src={logo}
              alt="someone"
            ></TalentCard>,
          ]}
        />
      </Box>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
