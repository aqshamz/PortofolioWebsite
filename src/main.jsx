import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { motion } from 'framer-motion';

import App from "./App.jsx";
import EducationPage from "./pages/education-page.jsx";
import ExperiencePage from "./pages/experience-page.jsx";
import HomePage from "./pages/home-page.jsx";
import SkillPage from "./pages/skills-page.jsx";
import ErrorPage from './pages/error-page.jsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/education", element: <EducationPage /> },
      { path: "/experience", element: <ExperiencePage /> },
      { path: "/skill", element: <SkillPage /> },
    ],
  },
  // { path: "/about", element: <AboutPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
