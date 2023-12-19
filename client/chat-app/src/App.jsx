import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home";
import GroupMessage from "./page/GroupMessage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/Group",
      element: <GroupMessage></GroupMessage>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
