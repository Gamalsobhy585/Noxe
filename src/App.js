import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Tv from './components/Tv/Tv';
import People from './components/People/People';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import './index.scss';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ItemDetails from './components/ItemDetails/ItemDetails';
import {Offline } from 'react-detect-offline';


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('loggedInUser')) {
      saveUserData();
    }
  }, []);




// function saveUserData()
// {
//   let encodedToken = localStorage.getItem('userToken')
//   let decodedToken = jwtDecode(encodedToken)
//   console.log(decodedToken);
//   setUserData(decodedToken)
// }






  function saveUserData() {
    let user = JSON.parse(localStorage.getItem('loggedInUser'));
    setUserData(user);
  }

  let routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout setUserData={setUserData} userData={userData} />,
      children: [
        

        { index: true, element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'movies', element: <ProtectedRoute userData={userData}><Movies /></ProtectedRoute> },
        { path: 'login', element: <Login  saveUserData={saveUserData} /> },
        { path: 'people', element: <ProtectedRoute userData={userData}><People /></ProtectedRoute> },
        { path: 'profile', element: <ProtectedRoute userData={userData}><Profile userData={userData} /></ProtectedRoute> },
        { path: 'tv', element: <ProtectedRoute userData={userData}><Tv /></ProtectedRoute> },
        { path: 'itemdetails/:mediaType/:id', element: <ProtectedRoute userData={userData}><ItemDetails /></ProtectedRoute> },        { path: 'login', element: <Login saveUserData={saveUserData} /> },
        { path: 'register', element: <Register /> },
      ]
    },
  ]);

  return (
    <>
    <div>
  <Offline><div className='offline'>You are offline</div></Offline>
</div>
    <RouterProvider router={routers} />







    </>
  );
}

export default App;
