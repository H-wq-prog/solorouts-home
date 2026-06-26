import React from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
export default function Navbar() {
    return (
        <div className={`${style.navbar} pe-5 pt-2 container-fluid d-flex justify-content-between align-items-center  `}>
            <div className={`${style.logo} `}>
                <img src={logo} alt="" style={{ width: "100%" }} />
            </div>
            <div className={style.link}>
                <ul className='d-flex justify-content-around '>
                    <li><a href="#home"><i class="fa-solid fa-house"></i> Home</a></li>
                    <li><a href="#features"><i class="fa-regular fa-calendar-check"></i> Features</a></li>
                    <li><a href="#how"><i class="fa-solid fa-magnifying-glass"></i> How It Works</a></li>
                    <li><a href="#contect"><i class="fa-solid fa-diagram-project"></i> Contect</a></li>
                </ul>
            </div>
            <div className="Notification">
                <div className="bell">

                </div>
                <div className={style.profel}>
                    <button class="btn  d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={avatar} alt="" />
                    </button>
                    <ul className={`${style.dropdown} dropdown-menu`}>
                        <li><a class="dropdown-item" href="/login">Login</a></li>
                        <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
