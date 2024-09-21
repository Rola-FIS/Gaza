import { Navigate } from 'react-router-dom';
import { lazy } from "react";
import BaseLayout from "../Layout/baseLayout";

const Home = lazy(() => import('../Views/Home'));
const Food = lazy(() => import('../Views/Food'));
const FoodDetails = lazy(() => import('../Views/Food/details.jsx'));
const SoleSurvivor = lazy(() => import('../Views/SoleSurvivor'));
const SoleSurvivorDetails = lazy(() => import('../Views/SoleSurvivor/details.jsx'));
const WaterSupply = lazy(() => import('../Views/Water'));
const WaterSupplyDetails = lazy(() => import('../Views/Water/details.jsx'));
const WarVictims = lazy(() => import('../Views/WarVictims'));
const WarVictimsDetails = lazy(() => import('../Views/WarVictims/details.jsx'));
const FamilyCare = lazy(() => import('../Views/FamilyCar'));
const FamilyCareDetails = lazy(() => import('../Views/FamilyCar/details.jsx'));

export const routes = [
    {
        path: '/',
        element: <Navigate to="/home" replace />
    },
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                index: true,
                path: '/home',
                element: <Home />,
                key: 'home', // Add key
            },
            {
                path: 'food-programs',
                element: <Food />,
                key: 'list', // Add key for list pages
            },
            {
                path: 'food-program/:id',
                element: <FoodDetails />,
                key: 'details', // Add key for details pages
            },
            {
                path: 'sole-survivor-programs',
                element: <SoleSurvivor />,
                key: 'list', // Add key for list pages
            },
            {
                path: 'sole-survivor/:id',
                element: <SoleSurvivorDetails />,
                key: 'details', // Add key for details pages
            },
            {
                path: 'water-programs',
                element: <WaterSupply />,
                key: 'list', // Add key for list pages
            },
            {
                path: 'water-program/:id',
                element: <WaterSupplyDetails />,
                key: 'details', // Add key for details pages
            },
            {
                path: 'war-victim-care',
                element: <WarVictims />,
                key: 'list', // Add key for list pages
            },
            {
                path: 'war-victims-care/:id',
                element: <WarVictimsDetails />,
                key: 'details', // Add key for details pages
            },
            {
                path: 'family-care',
                element: <FamilyCare />,
                key: 'list', // Add key for list pages
            },
            {
                path: 'family-care/:id',
                element: <FamilyCareDetails />,
                key: 'details', // Add key for details pages
            }
        ]
    }
];
