import { createBrowserRouter } from "react-router-dom";
import { Home, ThankyouPage } from "./pages";
import { RootLayout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "thank-you-page",
        element: <ThankyouPage />,
      },
    ],
  },
]);

export default router;
