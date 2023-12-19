import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
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
      loader: () => {
        if (!localStorage.username) {
          return redirect("/");
        }
        return null;
      },
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
