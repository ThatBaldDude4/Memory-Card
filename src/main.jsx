import { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx';
import Game from './Game';
import Rules from './Rules.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Game />,
        children: [
            {
                path: "rules",
                element: <Rules />,
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
