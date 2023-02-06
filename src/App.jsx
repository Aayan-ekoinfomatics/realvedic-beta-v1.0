import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import MyOrders from './components/account-page-components/MyOrders'
import SingleOrderDetails from './components/account-page-components/SingleOrderDetails'
import Footer from './components/global-components/Footer'
import Navbar from './components/global-components/Navbar'
import Sidebar from './components/global-components/Sidebar'
import ProductCard from './components/individual-components/ProductCard'
import BestOffersSection from './components/landing-page-components/BestOffersSection'
import BlogsSection from './components/landing-page-components/BlogsSection'
import CategoryTabs from './components/landing-page-components/CategoryTabs'
import LandingPageBanners from './components/landing-page-components/LandingPageBanners'
import SingleFoodProductSection from './components/landing-page-components/SingleFoodProductSection'
import SingleImageCarousal from './components/landing-page-components/SingleImageCarousal'
import SmallImageCarousal from './components/landing-page-components/SmallImageCarousal'
import TopSellers from './components/landing-page-components/TopSellers'
import AboutUsPage from './components/pages/AboutUsPage'
import AllProductsView from './components/pages/AllProductsView'
import Blogs from './components/pages/Blogs'
import CancellationPolicyPage from './components/pages/CancellationPolicyPage'
import Cart from './components/pages/Cart'
import CheckoutPage from './components/pages/CheckoutPage'
import DoctorsPage from './components/pages/DoctorsPage'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import MyAccount from './components/pages/MyAccount'
import OrderConfirmedPage from './components/pages/OrderConfirmedPage'
import SignUpPage from './components/pages/SignUpPage'
import SingleProduct from './components/pages/SingleProduct'
import TermsAndConditionsPage from './components/pages/TermsAndConditionsPage'


function App() {
  const [count, setCount] = useState(0)

  // inside useEffect make the landing page call and set it to a recoil state


  return (
    <div className="relative">
      <Sidebar />
      <Navbar />
      <div className=' md:mt-16 lg:mt-20 xl:mt-24'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/single-product/:product_id' element={<SingleProduct />} />
          <Route path='/all-products/:category_id' element={<AllProductsView />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/orders' element={<MyOrders />} />
          <Route path='/order-confirmed' element={<OrderConfirmedPage />} />
          <Route path='/account/orders/:order_id' element={<SingleOrderDetails />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/doctors' element={<DoctorsPage />} />
          <Route path='/account' element={<MyAccount />} />
          <Route path='/cancellation-policy' element={<CancellationPolicyPage />} />
          <Route path='/terms-conditions' element={<TermsAndConditionsPage />} />
          {/* <Route path='/test' element={<ProductCard id='2' title='Test Product' image='' weight='250' price='100' />} /> */}
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
