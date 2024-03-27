import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/footer";
import Portfolio from "./components/Portfolio";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer pages={[]} />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
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
