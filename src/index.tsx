import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Lab1 } from "./pages/Lab1";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    // Pour test un composant rapidement. Ne pas garder pour la prod.
    path: "/lab-1",
    element: <Lab1 />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer pages={[]} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
