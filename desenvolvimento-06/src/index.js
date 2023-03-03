import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './routes/Home';
import Contato from './routes/Contato';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/contato",
    element: <Contato/>
  }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>;
  </React.StrictMode>
);