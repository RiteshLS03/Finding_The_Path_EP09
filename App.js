import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Footer, Body, About, Error } from "./src/Components/Index";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // First , Need to push to the repo

function App() {
  return (
    <>
      <Header /> 
       <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
