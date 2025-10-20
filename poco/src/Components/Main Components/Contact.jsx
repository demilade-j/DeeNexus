import AfterContactHero from "../Contact/AfterContactHero";
import AfterContactNavbar from "../Contact/AfterContactNavbar";
import ContactFooter from "../Contact/ContactFooter";
import ContactHero from "../Contact/ContactHero";
import ContactNavBar from "../Contact/ContactNavbar";
import MediumDownNav from "../Home/HomeNavStuff/MediumDownNav";
import NavHeader from "../Home/HomeNavStuff/NavHeader";

export default function Contact() {
  return (
    <div>
       <NavHeader/>
       <ContactNavBar/>
       <AfterContactNavbar/>
       <ContactHero/>
       <AfterContactHero/>
       <br />
       <ContactFooter/>
       <MediumDownNav/>
       <div className='sm:hidden md:flex lg:hidden hidden'>
      <br /><br /><br />
      </div>
    </div>
  )
}
