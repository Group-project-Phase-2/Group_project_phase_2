import { createBrowserRouter } from "react-router-dom";
import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },
]);

export default router;
