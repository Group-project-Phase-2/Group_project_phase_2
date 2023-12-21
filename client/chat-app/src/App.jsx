import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import "./style.scss";
import Home from "./page/home";
import Login from "./page/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => {
        if (!localStorage.username) {
          return redirect("/login");
        }
        return null;
      },
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
