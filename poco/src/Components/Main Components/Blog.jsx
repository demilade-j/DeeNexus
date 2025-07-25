import React from 'react'
import NavHeader from '../Home/HomeNavStuff/NavHeader'
import ContactNavBar from '../Contact/ContactNavbar'
import AfterBlogNavbar from '../Blog/AfterBlogNavbar'
import MainBlogHero from '../Blog/MainBlogHero'
import MediumDownNav from '../Home/HomeNavStuff/MediumDownNav'
import ContactFooter from '../Contact/ContactFooter'

export default function Blog() {
  return (
    <div>
        <NavHeader/>
        <ContactNavBar/>
        <AfterBlogNavbar/>
        <MainBlogHero/>
        <MediumDownNav/>
        <ContactFooter/>
    </div>
  )
}
