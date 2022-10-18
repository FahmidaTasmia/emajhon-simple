import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './Loaders/Loaders';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Main></Main>,
      children:[
        {
          path:'/', 
          loader:()=>fetch('products.json'),
          element:<Shop></Shop>
        },
        {path:'/orders',
        loader: productsAndCartLoader,
         element:<Orders></Orders>
        },
        {path:'/inventory',
         element:<Inventory></Inventory>
        },

        {
          path:'/about', 
          element:<About></About>
        },

        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
   
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
