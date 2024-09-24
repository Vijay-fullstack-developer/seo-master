// App.js
import './App.css';
import About from './Page/About';
import Service from './Page/Service';
import Project from './Page/Project';
import Home from './Page/Home';
import Contact from './Page/Contact';
import Team from './Page/Team';
import Client from './Page/Client';
import Error from './Page/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>  // Wrap Home with Layout
  },
  {
    path: "/home",
    element: <Layout><Home /></Layout>  // Wrap Home with Layout
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>  // Wrap About with Layout
  },
  {
    path: "/service",
    element: <Layout><Service /></Layout>  // Wrap Service with Layout
  },
  {
    path: "/project",
    element: <Layout><Project /></Layout>  // Wrap Project with Layout
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>  // Wrap Contact with Layout
  },
  {
    path: "/team",
    element: <Layout><Team /></Layout>  // Wrap Team with Layout
  },
  {
    path: "/client",
    element: <Layout><Client /></Layout>  // Wrap Client with Layout
  },
  {
    path: "*",
    element: <Layout><Error /></Layout>  // Wrap Error page with Layout
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
