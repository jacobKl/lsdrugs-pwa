import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SubstancesList from './components/SubstancesList';
import SubstancePage from './components/SubstancePage';
import Aos from 'aos';
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: "/app/",
    element: <SubstancesList />,
  },
  {
    path: "/app/:substance",
    element: <SubstancePage />,
    errorElement: <SubstancesList/>
  }
]);

function App() {

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 200
    });
  }, [])

  return (
    <div className="App">
      <div className="app-wrapper">
        <Header/>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;