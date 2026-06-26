import React from 'react'
import style from './Right.module.css'
export default function Right() {
    return (
        <div className='d-flex align-items-center'>
            {/* ربط عنصر hr بكلاس الموديول واستخدام className لـ i بدلاً من class */}
            <hr className={style.dashedLine} />
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "35px", position: "relative", left: "-28px", color: "#a28bf3" }}></i>
        </div>
    )
}
