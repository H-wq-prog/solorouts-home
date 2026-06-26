import React from 'react'
import { Link } from 'react-router-dom'
import securty from '../../../assets/lock.png'
import style from './SingUp.module.css'
export default function SignUp() {
    return (
        <div className={`${style.login} page-spawn  d-flex justify-content-center align-items-center`}>

            <div className={`${style.sectionRight}`}>


                <div className={`${style.contanerData} d-flex gap-2 align-items-center GraphicalMovement`}>
                    <div className={`${style.iconeData}`}>
                        <img src={securty} alt="" />
                    </div>
                    <div className={style.title}>
                        <h4>Start Your Journey</h4>
                        <p>Join thousands of people building their independent life abroad.</p>
                    </div>
                </div>
            </div>
            <div className={`${style.sectionLeft} d-flex flex-column justify-content-around page-enter-left  `}>
                <div className={style.header}>

                    <h1>Create Your Account ✨</h1>
                    <span>Start your journey to a more organized life.</span>

                </div>
                <form action="" className='d-flex gap-3 flex-column'>
                    <div className={style.input}>
                        <label htmlFor="username">Full Name</label>
                        <input type="text" id='username' placeholder='Enter your full name' />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id='email' placeholder='Enter your email' />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="pass">Password</label>
                        <input type="text" id='pass' placeholder='Enter your password' />
                    </div>


                    <Link><button className='bntedit'> <i class="fa-solid fa-user-plus"></i>  Create Account</button></Link>
                </form>

                <div className={style.signup}>
                    <span>Don`t have an account?<Link to='/login' >Login</Link></span>
                </div>

            </div>
        </div>
    )
}
