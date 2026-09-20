/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import DepartmentFaculty from './pages/DepartmentFaculty';
import FacultyProfile from './pages/FacultyProfile';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import News from './pages/News';
import Apply from './pages/Apply';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'academics', element: <Academics /> },
      { path: 'admissions', element: <Admissions /> },
      { path: 'faculty', element: <Faculty /> },
      { path: 'departments/:deptId/faculty', element: <DepartmentFaculty /> },
      { path: 'faculty-profile/:memberId', element: <FacultyProfile /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'news', element: <News /> },
      { path: 'apply', element: <Apply /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

