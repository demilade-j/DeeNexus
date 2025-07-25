import AfterHero from '../Home/AfterHeroImmediate/AfterHero'
import RealHero from '../Home/HeroStuffs/RealHero'
import HomeDiscoverMenu from '../Home/HomeMenus/HomeDiscoverMenu'
import OfferMenu from '../Home/HomeMenus/OfferMenu'
import HomeMenu from '../Home/HomeMenus/HomeMenu'
import AfterNavBar from '../Home/HomeNavStuff/AfterNavBar'
import MediumDownNav from '../Home/HomeNavStuff/MediumDownNav'
import NavBar from '../Home/HomeNavStuff/NavBar'
import NavHeader from '../Home/HomeNavStuff/NavHeader'
import BigMenu from '../Home/HomeMenus/BigMenu'
import AfterMenus from '../Home/AfterHomeMenus/AfterMenus'
import NewsLetter from '../Home/HomeFooterStuffs/NewsLetter'
import GreenHomeFooter from '../Home/HomeFooterStuffs/GreenHomeFooter'
import RealHomeFooter from '../Home/HomeFooterStuffs/RealHomeFooter'

export default function Home() {
  return (
    <div>
      <NavHeader/>
      <NavBar/>
      <AfterNavBar/>
      <MediumDownNav/>
      <RealHero/>
      <AfterHero/>
      <HomeMenu/>
      <HomeDiscoverMenu/>
      <OfferMenu/> 
      <BigMenu/>
      <AfterMenus/>
      <NewsLetter/>
      <GreenHomeFooter/>
      <RealHomeFooter/>
      <div className='sm:hidden md:flex lg:hidden hidden'>
      <br /><br /><br />
      </div>
    </div>
  )
}