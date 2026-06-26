import React from 'react'
import image from '../../../assets/sectionTwo.png'
import style from './SectionTwo.module.css'
import { table } from './table'
export default function SectionTwo() {


    return (
        <div className={`${style.two} d-flex justify-content-center align-items-center section`} id='how'>
            <div className={`${style.left} d-flex flex-column gap-3`}>
                <span style={{ color: "#3c257e" }}>Why Solo-Route?</span>
                <h1>Life gets <span style={{ color: "#864aff" }}>complicated</span> when you’re on your own.</h1>
                <p>Solo-Route helps you stay organized across money, health, goals, and daily responsibilities.</p>


                <div className="table">
                    {
                        table.map((itame, index) => (
                            <div className={`${style.rowtabel} d-flex gap-3`}>
                                <div className={style.image}>
                                    <img src={itame.icone.scr} alt="" />
                                </div>
                                <div className={style.title}>
                                    <h3>{itame.head}</h3>
                                    <span>{itame.dis}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

            <div className={`${style.right}`}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
