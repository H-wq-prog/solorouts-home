import React from 'react'
import style from './FinalSection.module.css'
import { Link } from 'react-router-dom'
export default function FinalSection() {
    return (
        <div className={`${style.final} section d-flex justify-content-center align-items-end flex-column gap-3`}>
            <div className={`${style.data} d-flex flex-column`}>


                <h1>Take control of your finances, goals, health, and daily life.</h1>
                <span className='mb-3' style={{ width: "60%" }}>Build a personalized life system that helps you stay organized, focused, and confident every day.</span>
                <Link to="/signup">
                    <button className='bntedit'>Create Account <i class="fa-solid fa-arrow-right"></i></button>
                </Link>
            </div>
        </div>
    )
}
