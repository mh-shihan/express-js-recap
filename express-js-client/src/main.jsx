import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputForm from "./components/input-form/InputForm.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import InsertedPeoples from "./pages/inserted-peoples/InsertedPeoples.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "input-form", element: <InputForm></InputForm> },
      {
        path: "inserted-peoples",
        element: <InsertedPeoples></InsertedPeoples>,
        loader: () => fetch("http://localhost:5000/inserted-peoples"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
