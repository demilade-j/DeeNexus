import React from 'react'
import NavHeader from '../Home/HomeNavStuff/NavHeader'
import ContactNavBar from '../Contact/ContactNavbar'
import AfterMenuNavbar from '../Menu/AfterMenuNavbar'
import MediumDownNav from '../Home/HomeNavStuff/MediumDownNav'
import ContactFooter from '../Contact/ContactFooter'
import MenuHero from '../Menu/MenuHero'
import AfterMenuHeroes from '../Menu/AfterMenuHeroes'
import MenuEnd from '../Menu/MenuEnd'

export default function Menu() {
  return (
    <div>
      <NavHeader/>
      <ContactNavBar/>
      <AfterMenuNavbar/>
      <MenuHero/>
      <AfterMenuHeroes/>
      <MenuEnd/>
      <MediumDownNav/>
      <ContactFooter/>
    </div>
  )
}
