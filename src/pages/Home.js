import React from 'react'
import Navbar from '../components/navbar/NavigationBar'
import { HomePageSection1 } from '../features/homePageSections/section1/HomePageSection1'
import { HomePageSection2 } from '../features/homePageSections/section2/HomePageSection2'
import { HomePageSection3 } from '../features/homePageSections/section3/HomePageSection3'
import Triangle from '../assets/Triangle.png'
export const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#FFFBEB" }}>
        <HomePageSection1 />
        <HomePageSection2 />
      </div>
      <HomePageSection3 />
    </>


  )
}
