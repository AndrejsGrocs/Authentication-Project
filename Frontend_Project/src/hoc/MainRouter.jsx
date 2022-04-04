import React from 'react'
import Landing from '../views/Landing/Landing'
import Login from '../views/Login/Login';
import Profile from '../views/Profile/Profile';
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from "react-router-dom";
import '../../src/assets/scss/main.scss'


export default function MainRouter() {
         const user=true
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
