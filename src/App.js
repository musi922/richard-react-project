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
import { Login } from './Screens/Profile';
import { Create } from './Screens/Create';
import { Lost } from './Screens/Lost';
import { View } from './Screens/View';
import { Dashboard } from './Screens/Dashboard';
import { EditProfile } from './Screens/EditProfile';
import { Dashboards } from './Screens/Dashboards';
import { MyListings } from './Screens/MyListings';
import { AddNew } from './Screens/AddNew';


function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Homepage/>
    },
    {
      path : "/Dashboard",
      element : <Dashboard/>,
      children: [
        {
        path : "/Dashboard/EditProfile",
        element : <EditProfile/>,
    },
    {
      path : "/Dashboard/dashboards",
      element : <Dashboards/>
    },
    {
      path : "/Dashboard/MyListings",
      element : <MyListings/>
    },
    {
      path : "/Dashboard/AddNew",
      element : <AddNew/>
    }
  ]
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
      path: "/View",
      element: <View/>
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
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Lost",
      element: <Lost/>
    },
    {
      path: "/Create",
      element: <Create />
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
   
  );

}

export default App;
