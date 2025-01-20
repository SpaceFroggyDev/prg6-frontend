import React, {useEffect, useState} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css';
import NotesList from "./components/NotesList.jsx";
import FormComponent from "./components/FormComponent.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import NoteDetail from "./components/pages/NoteDetail.jsx";
import NoteCreate from "./components/pages/NoteCreate.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/notes/:id',
                element: <NoteDetail/>,
            },
            {
                path: '/notes/create',
                element: <NoteCreate/>,
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
