import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/SignUp/Register";
import Home from "../../Main/Home/Home";
import Main from "../../Main/Main/Main";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Register></Register>
            }
        ]
    }
]);

export default routes;