import { Navigate } from 'react-router-dom';
import {lazy} from "react";


const BaseLayout = lazy(() => import('../Layout/baseLayout'));
const Home = lazy(() => import('../Views/Home'));

export const routes = [
    {
        path: '/',
        element: <Navigate to="/" replace />,
    },
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {

                path: 'home',
                element: <Home />,
            },
        ],
    },

];
