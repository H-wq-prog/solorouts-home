import React from 'react'
import { Link } from 'react-router-dom'
import securty from '../../../assets/scer.png'
import style from './Login.module.css'
import papter from '../../../assets/paper.png'
export default function Login() {
    return (
        <div className={`${style.login} page-spawn d-flex justify-content-center align-items-center`}>
            <div className={`${style.sectionLeft} d-flex flex-column justify-content-around page-enter-right`}>
                <div className={style.header}>

                    <h1>Welcome Back 👋</h1>
                    <span>Login to continue organized journey</span>

                </div>
                <form action="" className='d-flex gap-3 flex-column'>
                    <div className={style.input}>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id='email' placeholder='Enter your email' />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="pass">Password</label>
                        <input type="text" id='pass' placeholder='Enter your password' />
                    </div>


                    <Link><button className='bntedit'><img src={papter} alt="" style={{ width: "7%" }} /> Login</button></Link>
                </form>

                <div className={style.signup}>
                    <span>Don`t have an account?<Link to='/signup' >Sign Up</Link></span>
                </div>

            </div>

            <div className={`${style.sectionRight}`}>


                <div className={`${style.contanerData} d-flex gap-2 align-items-center GraphicalMovement`}>
                    <div className={`${style.iconeData}`}>
                        <img src={securty} alt="" />
                    </div>
                    <div className={style.title}>
                        <h4>Secure & Private</h4>
                        <p>Your data is encrypted and protected with enterprise-grade security.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
