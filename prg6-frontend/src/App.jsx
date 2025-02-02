import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css';
// import StonesList from "./components/StonesList.jsx";
// import FormComponent from "./components/FormComponent.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import StoneDetail from "./components/pages/StoneDetail.jsx";
import StoneCreate from "./components/pages/StoneCreate.jsx";
import StoneEdit from "./components/pages/StoneEdit.jsx";
import StoneDelete from "./components/pages/StoneDelete.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";


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
            },
            {
                path: '/stones/:id/edit',
                element: <StoneEdit/>,
            },
            {
                path: '/stones/:id/delete',
                element: <StoneDelete/>,
            },
            {
                path: "*",
                element: <ErrorPage/>,
            },
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
