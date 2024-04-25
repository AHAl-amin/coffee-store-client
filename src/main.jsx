import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './componante/AddCoffee.jsx';
import UpdateCoffee from './componante/UpdateCoffee.jsx';
import SignUp from './componante/SignUp.jsx';
import SignIn from './componante/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './componante/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-sable-one.vercel.app/coffee')
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-sable-one.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path:"/users",
    element:<Users></Users>,
    loader:()=>fetch('https://coffee-store-server-sable-one.vercel.app/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
