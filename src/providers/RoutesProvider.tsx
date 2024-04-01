import { createBrowserRouter, RouterProvider } from "react-router-dom";
import publicRoutes from "../routes/public.routes";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      ...publicRoutes.map((route) => ({
        path: route.path,
        element: <route.element />,
      })),
    ],
  },
]);
const RoutesProvider = () => {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
};
export default RoutesProvider;
