import ContactFooter from "../../Contact/ContactFooter";
import ContactNavBar from "../../Contact/ContactNavbar";
import MediumDownNav from "../../Home/HomeNavStuff/MediumDownNav";
import NavHeader from "../../Home/HomeNavStuff/NavHeader";
import AfterHistoryNavbar from "./AfterHistoryNavbar";
import HistoryHero from "./HistoryHero";

export default function History() {
  return (
    <div>
      <NavHeader />
      <ContactNavBar />
      <AfterHistoryNavbar />
      <HistoryHero/>
      <ContactFooter />
      <MediumDownNav />
    </div>
  );
}
