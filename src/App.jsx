import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
import SingleProduct from './components/pages/SingleProduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative">
      <Sidebar />
      <Navbar />
      {/* <CategoryTabs />
      <LandingPageBanners />
      <TopSellers />
      <SmallImageCarousal />
      <SingleImageCarousal />
      <SingleFoodProductSection />
      <BestOffersSection />
      <BlogsSection /> */}
      <SingleProduct />
    </div>
  )
}

export default App
