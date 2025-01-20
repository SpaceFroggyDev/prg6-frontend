import React, {useEffect, useState} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css';
import StonesList from "./components/StonesList.jsx";
import FormComponent from "./components/FormComponent.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import StoneDetail from "./components/pages/StoneDetail.jsx";
import StoneCreate from "./components/pages/StoneCreate.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/stones/:id',
                element: <StoneDetail/>,
            },
            {
                path: '/stones/create',
                element: <StoneCreate/>,
            }
        ]
    }
])

function App() {

        return (
          <>
              <RouterProvider router={router}/>
          </>
        );
}

export default App
