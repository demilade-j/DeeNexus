import React from "react";
import NavHeader from "../Home/HomeNavStuff/NavHeader";
import ContactNavBar from "../Contact/ContactNavbar";
import MediumDownNav from "../Home/HomeNavStuff/MediumDownNav";
import ContactFooter from "../Contact/ContactFooter";
import AfterShopNavbar from "../Shop/AfterShopNavbar";
import MainShopBg from "../Shop/ShopMain/MainShopBg";

export default function Shop() {
  return (
    <div>
      <NavHeader />
      <ContactNavBar />
      <AfterShopNavbar/>
      <MainShopBg/>
      <ContactFooter />
      <MediumDownNav />
    </div>
  );
}
