import React from 'react'
import {NavigationBar} from '../components/navbar/NavigationBar'
import {Footer} from '../components/footer/Footer'
import { HomePageSection1 } from '../features/homePageSections/section1/HomePageSection1'
import { HomePageSection2 } from '../features/homePageSections/section2/HomePageSection2'
import { HomePageSection3 } from '../features/homePageSections/section3/HomePageSection3'
import { HomePageSection4 } from '../features/homePageSections/section4/HomePageSection4'
import { HomePageSection5 } from '../features/homePageSections/section5/HomePageSection5'
import { HomePageSection6 } from '../features/homePageSections/section6/HomePageSection6'
import { HomePageSection7 } from '../features/homePageSections/section7/HomePageSection7'
export const Home = () => {
  return (
    <>
      <NavigationBar />
      <HomePageSection1 />
      <HomePageSection2 />
      <HomePageSection3 />
      <HomePageSection4 />
      <HomePageSection5 />
      <HomePageSection6 />
      <HomePageSection7 />
      <Footer />
    </>


  )
}
