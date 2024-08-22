import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Racine from '../components/Racine'
import Accueil from '../components/Accueil'
import Abonner from '../components/Abonner'

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
            }
        ]
    }
])

export default mesRoutes