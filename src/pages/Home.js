import React from 'react'
import Navbar from '../components/navbar/NavigationBar'
import { HomePageSection1 } from '../features/homePageSections/section1/HomePageSection1'
import { HomePageSection2 } from '../features/homePageSections/section2/HomePageSection2'
import { HomePageSection3 } from '../features/homePageSections/section3/HomePageSection3'
import { HomePageSection4} from '../features/homePageSections/section4/HomePageSection4'
import { HomePageSection5 } from '../features/homePageSections/section5/HomePageSection5'
import { HomePageSection6 } from '../features/homePageSections/section6/HomePageSection6'
import Footer from '../components/footer/Footer'
export const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#FFFBEB" }}>
        <HomePageSection1 />
        <HomePageSection2 />
      </div>
      <HomePageSection3 />
      <HomePageSection4 />
      <HomePageSection6 />
      <Footer/>
    </>


  )
}
