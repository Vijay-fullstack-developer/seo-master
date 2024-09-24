// App.js
import './App.css';
import About from './Page/About';
import Header from './Page/Header';
import Service from './Page/Service';
import Project from './Page/Project';
import Home from './Page/Home';
import Contact from './Page/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Team from './Page/Team';
import Client from './Page/Client';
import Error from './Page/Error';

const router = createBrowserRouter([
  {
    path: "/", element: <Home /> // Default route points to Home
  },
  {
    path: "/home", element: <Home />
  },
  {
    path: "/about", element: <About />
  },
  {
    path: "/service", element: <Service />
  },
  {
    path: "/project", element: <Project />
  },
  {
    path: "/contact", element: <Contact />
  },
  {
    path: "/team", element: <Team />
  },
  {
    path: "/client", element: <Client />
  },
  {
    path: "/error", element: <Error />
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}