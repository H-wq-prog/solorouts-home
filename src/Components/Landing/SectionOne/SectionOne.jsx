import React from 'react'
import image from '../../../assets/homeimage.png'
import style from './SectionOne.module.css'
import { reviwe } from './sectiondata'
import { Link } from 'react-router-dom'
export default function SectionOne() {


    return (
        <div className={`${style.one} d-flex justify-content-center align-items-center`} id='home'>
            <div className={`${style.left} d-flex flex-column gap-3`}>
                <h1>Take Control of Your <span style={{ color: "#864aff" }}>Independent Life.</span></h1>
                <p>Solo-Route is your Personal Life Management
                     System that helps you manage finances, goals, health,
                     plans, and daily responsibilities in one organized dashboard.
                    </p>
                <div className={`${style.bnt} d-flex gap-3`}>
                    <Link to='/signup'>

                        <button className='bntedit' >Get Started  <i class="fa-solid fa-arrow-right"></i></button>
                    </Link>
                    <Link>

                        <button className='bntedit'> <i class="fa-solid fa-play"></i>  Learn More</button>
                    </Link>
                </div>
                <div className={`${style.reviwe} d-flex justify-content-around`}>
                    <p>Join 12K+ independent souls worldwide</p>

                    <div className={`${style.imgReviwe}  d-flex  justify-content-center align-items-center`}>
                        {
                            reviwe.map((item, index) => (
                                <div className={style.image} >
                                    <img src={item.icon.src} alt={item.icon.alt} style={{ width: "100%" }} />
                                </div>
                            ))
                        }

                        <i className={`fa-solid fa-heart ${style.gradientIcon}`}></i>
                    </div>
                </div>
            </div>

            <div className={`${style.right}`}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
