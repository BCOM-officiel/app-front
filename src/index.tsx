import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Outlet, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

import Footer from "./components/footer";
import Profil from "./pages/Profil";
import Talents from "./pages/Talents";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

import Header from "./components/Header";

const router = createBrowserRouter([
  {
    element: (
      <>
       <Header/>
      
        <Outlet />
        <Footer pages={[]} />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/talents",
        element: <Talents />,
      },
      {
        path: "/talents/:id",
        element: <Profil />,
      },
      {
        path:"/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
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
