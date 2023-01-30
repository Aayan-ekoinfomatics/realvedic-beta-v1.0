import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/global-components/Footer'
import Navbar from './components/global-components/Navbar'
import Sidebar from './components/global-components/Sidebar'
import BestOffersSection from './components/landing-page-components/BestOffersSection'
import BlogsSection from './components/landing-page-components/BlogsSection'
import CategoryTabs from './components/landing-page-components/CategoryTabs'
import LandingPageBanners from './components/landing-page-components/LandingPageBanners'
import SingleFoodProductSection from './components/landing-page-components/SingleFoodProductSection'
import SingleImageCarousal from './components/landing-page-components/SingleImageCarousal'
import SmallImageCarousal from './components/landing-page-components/SmallImageCarousal'
import TopSellers from './components/landing-page-components/TopSellers'
import LandingPage from './components/pages/LandingPage'
import SingleProduct from './components/pages/SingleProduct'


function App() {
  const [count, setCount] = useState(0)

  // inside useEffect make the landing page call and set it to a recoil state


  return (
    <div className="relative">
      <Sidebar />
      <Navbar />
      <div className=' md:mt-16 lg:mt-20 xl:mt-24'>
      <LandingPage />
      {/* <SingleProduct /> */}
      </div>
      <Footer/>
    </div>
  )
}

export default App
