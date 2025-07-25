import ContactFooter from "../../Contact/ContactFooter";
import ContactNavBar from "../../Contact/ContactNavbar";
import MediumDownNav from "../../Home/HomeNavStuff/MediumDownNav";
import NavHeader from "../../Home/HomeNavStuff/NavHeader";
import AfterTeamNavbar from "./AfterTeamNavbar";
import TeamHero from "./TeamHero";

export default function Team() {
  return (
    <div>
        <NavHeader/>
        <ContactNavBar/>
        <AfterTeamNavbar/>
        <TeamHero/>
        <ContactFooter/>
        <MediumDownNav/>
    </div>
  )
}
