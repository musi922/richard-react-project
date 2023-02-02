import logo from './logo.svg';
import './App.css';
import { OurProperties } from './Screens/Properties';
import {RouterProvider,createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import { Homepage } from './Screens/Homepage';
import { Mlssearch } from './Screens/MlsSearch';
import { Communities } from './Screens/Communities';
import { News } from './Screens/News';
import { Services } from './Screens/Service';
import { AboutBlair } from './Screens/AboutBlair';
import { Contact } from './Screens/Contact';
import { Readmore } from './Screens/Readmore';


function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Homepage/>
    },
    {
      path: "/properties",
      element: <OurProperties/>
    },
    {
      path: "/Mlssearch",
      element: <Mlssearch/>
    },
    {
      path: "/Communities",
      element: <Communities/>
    },
    {
      path: "/News",
      element: <News/>
    },
    {
      path: "/News/Readmore",
      element: <Readmore />

    },
    {
      path: "/Services",
      element: <Services/>
    },
    {
      path: "/About Blair",
      element: <AboutBlair/>
    },
    {
      path: "/Contact",
      element: <Contact/>
    }


  ])
  return (   
    <RouterProvider router = {router}/>
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<OurProperties/>} />
    //   <Route path='/mls' element={<div><Navigation />This is mls</div>} />
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
