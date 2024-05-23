import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/home/Home";
import Shop from "../pages/shop/Shop";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'shop',
          element:<Shop></Shop>
        }
      ]
    },
  ]);


  