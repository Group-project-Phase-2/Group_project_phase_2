import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
