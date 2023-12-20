import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import "./style.scss";
import Home from "./page/home";
import Login from "./page/Login";
import { store } from "./store";
import { Provider } from "react-redux";

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
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
