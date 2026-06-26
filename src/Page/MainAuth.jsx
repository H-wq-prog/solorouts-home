import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from '../Components/Auth/SignUp/SignUp'
import Login from '../Components/Auth/Login/Login'
export default function MainAuth() {
    return (
        <div style={{ background: "linear-gradient(180deg, #E8D9FF, #F9E3D9)", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <Routes>
                <Route path='/' element={<SignUp />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    )
}
