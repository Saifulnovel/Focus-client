import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/SignUp/Register";
import DashBoard from "../../DashBoard/DashBoard";
import DashboardLayout from "../../DashBoard/DashboardLayout/DashboardLayout";
import MyOrders from "../../DashBoard/MyOrders/MyOrders";
import ErrorPage from "../../Main/ErrorPage/ErrorPage";
import Blog from "../../Main/Home/Blog/Blog";
import Home from "../../Main/Home/Home";
import Main from "../../Main/Main/Main";
import Category from "../../Main/Pages/Category/Category";
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
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
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
      <DashboardLayout/>
      </PrivateRoutes>
    ),
    children: [
      {
        path: '/dashboard',
        element:<MyOrders/>
      }
    ]
  },
]);

export default routes;