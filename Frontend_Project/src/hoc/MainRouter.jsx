import React, { useEffect, useState } from 'react'
import Landing from '../views/Landing/Landing'
import Login from '../views/Login/Login';
import Profile from '../views/Profile/Profile';
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from "react-router-dom";

import '../../src/assets/scss/main.scss'


export default function MainRouter() {

  const user = false
         /* const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []); */
    return (
        <div>
             <Router>
        <div>
           
            <Navbar user={user}/>
            <Routes>
            
                <Route path='/' element= {<Landing/>} />
               <Route path='/login' element= {user? <Navigate to='/'/> : <Login/>} />
               <Route path='/profile' element= {user ? <Profile /> : <Navigate to="/login" />} />
                 




            </Routes>
        </div>
        </Router>
        </div>
    )
}
