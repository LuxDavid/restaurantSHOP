import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Carrito from "../views/carrito";
import InputChecking from "../views/inputChecking";
import InputFinish from "../views/inputFinish";
import Products from "../views/products";
import ProductView from "../views/productView"

export const router=createBrowserRouter([

{
    path:'/',
    element:<App/>
},

{
    path:'/cart',
    element:<Carrito/>
},

{
    path:'/checking',
    element:<InputChecking/>
},

{
    path:'/finally',
    element:<InputFinish/>
},

{
    path:'/carrito',
    element:<App/>
},

{
    path:'/products',
    element:<Products/>
},
{
    path:'/products/:id',
    element:<ProductView/>
}
])