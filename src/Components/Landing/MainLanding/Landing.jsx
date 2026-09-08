import React from 'react'
import Navbar from '../../../Layout/LandingNavbar/Navbar'
import style from './Landing.module.css'
import SectionOne from '../SectionOne/SectionOne'
import CardsLanding from '../../../Ui/Cards/CardsLanding'
import SectionTwo from '../SectionTwo/SectionTwo'
import UnderCards from '../../../Ui/UnderCards/UnderCards'
import SectionThree from '../SectionThree/SectionThree'
import FinalSection from '../FinalSection/FinalSection'
import Footer from '../Footer/Footer'
export default function Landing() {
    return (
        <div className={` ${style.landing} page-spawn`}>
            <div style={{ width: "100%" }} className='sticky-element fixed-button'>
                <Navbar />

            </div>

            <div style={{ width: "98%", paddingBottom: "30px" }}>

                <SectionOne />

            </div>

            <div className='pt-5 pb-5' style={{ width: "98%", paddingBottom: "30px" }} id='features'>
                <CardsLanding />
            </div>


            <div style={{ width: "98%", paddingBottom: "30px" }} >
                <SectionTwo />
            </div>
            <div style={{ width: "98%", paddingBottom: "30px" }} >
                <SectionThree />
            </div>
            <div style={{ width: "98%", paddingBottom: "30px" }} >
                <UnderCards />
            </div>
            <div style={{ width: "98%", paddingBottom: "30px" }} >
                <FinalSection />
            </div>
            <div style={{ width: "96%", paddingBottom: "30px" }} >
                <Footer />
            </div>
        </div>
    )
}
