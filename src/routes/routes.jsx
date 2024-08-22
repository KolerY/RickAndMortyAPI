import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Racine from '../components/Racine'
import Accueil from '../components/Accueil'
import Abonner from '../components/Abonner'
import Details from '../components/Details'

const mesRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Racine />,
        children: [
            {
                path: '/',
                element: <Accueil />
            },
            {
                path: '/abonner',
                element: <Abonner />
            },
            {
                path: '/details/:id',
                element: <Details />
            }
        ]
    }
])

export default mesRoutes