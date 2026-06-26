import React from 'react'
import image from '../../../assets/sectionTwo.png'
import style from './SectionThree.module.css'
import { howData } from './HowData'
import Right from '../../../Ui/Right/Right'
export default function SectionOne() {


    return (
        <div className={`${style.three} d-flex justify-content-center align-items-center section flex-column `} id='contect'>
            <h2>How It Works</h2>
            <div className='d-flex w-100 justify-content-around mt-5'>

                {
                    howData.map((itame, index) => (
                        <div className='d-flex'>
                            <div className={`${style.card} d-flex flex-column align-items-center text-center justify-content-center `}>
                                <div className={`${style.imag}`}>
                                    <span>{index + 1}</span>
                                    <img src={itame.icon.src} alt={itame.icon.alt} />

                                </div>
                                <div className={`${style.title}`}>
                                    <h3 className={style.header}>{itame.head}</h3>
                                    <p className={style.dis}>{itame.dis}</p>
                                </div>
                            </div>

                            {index !== howData.length - 1 && <Right />}



                        </div>
                    ))
                }

            </div>
        </div>
    )
}
