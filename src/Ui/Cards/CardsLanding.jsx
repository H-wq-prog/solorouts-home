import React from 'react'
import style from './CardsLanding.module.css'
import { data } from './imageCard'

export default function CardsLanding() {
    return (
        <div className='d-flex justify-content-center align-items-center gap-5' >
            {
                data.map((itame, index) => (
                    <div className={` d-flex pt-3 pb-3 align-items-center flex-column  ${style.card}`} style={{ background: itame.styles.backgroundCard, boxShadow: itame.styles.shadow }}>
                        <i class={itame.title.icone } style={{ background: itame.styles.backgroundIcone, boxShadow: itame.styles.shadowIcone }}></i>

                        <div className={style.image}>
                            <img src={itame.imicon.src} alt={itame.imicon.alt} />
                        </div>



                        <div className={`ps-5 pt-2 ${style.header}`}>
                            <div className="title d-flex align-items-center  gap-2">

                                <h3 >{itame.title.header}</h3>

                            </div>
                            <p style={{ color: itame.styles.coloDis }}>{itame.pargrafe}</p>
                        </div>




                    </div>

                ))

            }


        </div>
    )
}
