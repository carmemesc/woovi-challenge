import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/homepage.tsx';
import Paymentpage from './pages/paymentpage.tsx';  


const router = createBrowserRouter([
    {path: '/', element: <Homepage />},
    {path: '/payment', element: <Paymentpage />},
]);

createRoot(document.getElementById('root')!).render(
   <RouterProvider router={router} />
)


