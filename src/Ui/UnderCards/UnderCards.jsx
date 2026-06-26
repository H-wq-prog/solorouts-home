import React from 'react'
import style from './UnderCards.module.css'
import image from '../../assets/Underimega.png'
import { data } from './imageCard'

export default function UnderCards() {
    return (
        <div className='d-flex justify-content-center align-items-center gap-3 ' >
            {
                data.map((itame, index) => (
                    <div className={` d-flex pt-3 pb-3 justify-content-around align-items-center ${style.card}`} style={{ background: itame.styles.backgroundCard, boxShadow: itame.styles.shadow }}>
                        <div className={style.image}>
                            <img src={itame.imicon.src} alt={itame.imicon.alt} />
                        </div>

                        <div className={` pt-2 ${style.header}`}>
                            <div className="title d-flex flex-column  gap-2 ">

                                <span style={{ color: itame.numberColor }}>{itame.number}</span>
                                <h3 >{itame.title.header}</h3>

                            </div>
                            <p style={{ color: itame.styles.coloDis }}>{itame.pargrafe}</p>
                        </div>




                    </div>

                ))

            }

            <div className={style.imyimage}>
                <img src={image} alt="" />
            </div>


        </div>
    )
}
