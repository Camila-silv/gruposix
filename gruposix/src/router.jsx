import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { RootLayout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
]);

export default router;
