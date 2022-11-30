import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/SignUp/Register";
import AddProducts from "../../DashBoard/AddProducts/AddProducts";
import AllBuyers from "../../DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../DashBoard/AllSellers/AllSellers";
import Allusers from "../../DashBoard/Allusers/Allusers";

import DashboardLayout from "../../DashBoard/DashboardLayout/DashboardLayout";
import MyOrders from "../../DashBoard/MyOrders/MyOrders";
import MyProducts from "../../DashBoard/MyProducts/MyProducts";
import ErrorPage from "../../Main/ErrorPage/ErrorPage";
import Blog from "../../Main/Home/Blog/Blog";
import Home from "../../Main/Home/Home";
import Main from "../../Main/Main/Main";

import CategoryPage from "../../Main/Pages/CategoryPage/CategoryPage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        element: <CategoryPage></CategoryPage>,
        loader: ({ params }) =>
          fetch(
            ` https://camera-resell-server.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },

      {
        path: "/dashboard/allusers",
        element: <Allusers />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/sellers",
        element: <AllSellers />,
      },
      {
        path: "/dashboard/buyers",
        element: <AllBuyers />,
      },
      {
        path: "dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);

export default routes;