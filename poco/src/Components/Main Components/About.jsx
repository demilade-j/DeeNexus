import AboutEnd from "../About/AboutEnd";
import AboutHero from "../About/AboutHero";
import AboutTalentedChefs from "../About/AboutTalentedChefs";
import AboutVideoPizza from "../About/AboutVideoPizza";
import AfterAboutNavbar from "../About/AfterAboutNavbar";
import AfterAboutVideo from "../About/AfterAboutVideo";
import GroupAboutPizza from "../About/GroupAboutPizza";
import ContactFooter from "../Contact/ContactFooter";
import ContactNavBar from "../Contact/ContactNavbar";
import MediumDownNav from "../Home/HomeNavStuff/MediumDownNav";
import NavHeader from "../Home/HomeNavStuff/NavHeader";

export default function About() {
  return (
    <div>
       <NavHeader/>
       <ContactNavBar/>
       <AfterAboutNavbar/>
       <AboutHero/>
       <AboutVideoPizza/>
       <AfterAboutVideo/>
       <GroupAboutPizza/>
       <AboutTalentedChefs/>
       <AboutEnd/>
       <ContactFooter/>
       <MediumDownNav/>
       <div className='sm:hidden md:flex lg:hidden hidden'>
      <br /><br /><br />
      </div>
    </div>
  )
}
