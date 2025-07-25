import ContactNavBar from "../../Contact/ContactNavbar";
import MediumDownNav from "../../Home/HomeNavStuff/MediumDownNav";
import NavHeader from "../../Home/HomeNavStuff/NavHeader";
import AfterFAQSNavbar from "./AfterFAQSNavbar";
import ContactFooter from "../../Contact/ContactFooter";
import FAQSHero from "./FAQSHero";

export default function FAQS() {
  return (
    <div>
        <NavHeader/>
        <ContactNavBar/>
        <AfterFAQSNavbar/>
        <FAQSHero/>
        <MediumDownNav/>
       <ContactFooter/>
    </div>
  )
}