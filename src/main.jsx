import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Error  from './Components/Error.jsx';
import { Body } from './Components/body.jsx';
import Cart from './Components/Cart.jsx';
import RestaurantPage from './Components/RestaurantPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantPage />
      },
    ],
    errorElement: <Error />
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)