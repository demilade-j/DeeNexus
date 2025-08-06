import React from 'react'
import NavHeader from '../Home/HomeNavStuff/NavHeader'
import MediumDownNav from '../Home/HomeNavStuff/MediumDownNav'
import ContactNavBar from '../Contact/ContactNavbar'
import AfterCheckoutNavbar from '../Checkout/AfterCheckoutNavbar'
import CheckoutHero1 from '../Checkout/Checkout1/CheckoutHero1'
import ContactFooter from '../Contact/ContactFooter'

export default function MainCheckout() {
  return (
    <div>
        <NavHeader/>
        <ContactNavBar/>
        <AfterCheckoutNavbar/>
        <CheckoutHero1/>
        <ContactFooter/>
        <MediumDownNav/>
    </div>
  )
}
