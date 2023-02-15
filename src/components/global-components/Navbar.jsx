import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/realvedic-logo.png'
import blog from '../../assets/icons/blogs_2.svg'
import mom_baby from '../../assets/icons/mom&baby.svg'
import products from '../../assets/icons/products.svg'
import doctors from '../../assets/icons/doctors_2.svg'
import profile from '../../assets/icons/account_2.svg'
import cart from '../../assets/icons/cart_2.svg'
import sidebar_icon from '../../assets/icons/sidebar-icon.svg'
import sidebarAtom from '../../recoil/atoms/sidebarAtom'
import logout from '../../assets/icons/logout_2.svg'
import { useRecoilState } from 'recoil'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import navbar from '../../mockApi/navbarApi'
import item from '../../assets/images/about-us.png'
import axios from 'axios'
import { VITE_BASE_LINK } from '../../../baseLink'
import cartPageAtom from '../../recoil/atoms/cartPageAtom'
import { toast } from 'react-toastify'
import cross from "../../assets/icons/cross.svg";
import search from '../../assets/icons/search.svg'
import tabData from '../../mockApi/categoryTabs'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom'

const Navbar = () => {

    const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarAtom);

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    const [allproductsApiData, setAllproductsApiData] = useState();

    const [cartData, setCartData] = useRecoilState(cartPageAtom)

    const [productsHover, setProductsHover] = useState(false);

    const [cartView, setCartView] = useState(false);

    const [searchData, setSearchData] = useState('');

    const [searchDropDown, setSearchDropDown] = useState(false);

    const navigate = useNavigate()

    const location = useLocation()

    // const [cartData, setCartData] = useState();

    const [mockProducts, setMockProducts] = useState([
        { title: 'Dosa Mix', id: 0, image: item, category: 'Dosa', },
        { title: 'Rasam Kokum', id: 1, image: item, category: 'Rasam & Soups', },
        { title: 'Flour', id: 2, image: item, category: 'Wheat & Rice', },
        { title: 'Kokum Rasam', id: 3, image: item, category: 'Rasam & Soups', },
        { title: 'Dosa Mix', id: 4, image: item, category: 'Dosa', },
        { title: 'Rasam Mix', id: 5, image: item, category: 'Rasam & Soups', },
        { title: 'Flour', id: 6, image: item, category: 'Wheat & Rice', },
        { title: 'Kokum Rasam', id: 7, image: item, category: 'Rasam & Soups', },
        { title: 'Dosa Mix', id: 8, image: item, category: 'Dosa', },
        { title: 'Rasam Mix', id: 9, image: item, category: 'Rasam & Soups', },
        { title: 'Flour', id: 10, image: item, category: 'Wheat & Rice', },
        { title: 'Vegitable masala | Chillie', id: 11, image: item, category: 'Masala & Powders', },
        { title: 'Kokum Rasam', id: 12, image: item, category: 'Rasam & Soups', },
        { title: 'Rasam Mix', id: 13, image: item, category: 'Rasam & Soups', },
        { title: 'Flour', id: 14, image: item, category: 'Wheat & Rice', },
        { title: 'Vegitable masala | Chillie', id: 15, image: item, category: 'Masala & Powders', },
        { title: 'Kokum Rasam', id: 16, image: item, category: 'Rasam & Soups', },
        { title: 'Dosa Mix', id: 17, image: item, category: 'Dosa', },
        { title: 'Rasam Mix', id: 18, image: item, category: 'Rasam & Soups', },
        { title: 'Flour', id: 19, image: item, category: 'Wheat & Rice', },
        { title: 'Vegitable masala | Chillie', id: 20, image: item, category: 'Masala & Powders', },
    ]);

    useEffect(() => {
        if (cartView === true) {
            let formdata = new FormData();
            formdata.append('token', localStorage.getItem('token'))
            axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                // console.log(response?.data)
                setCartData(response?.data)
            })
        }
    }, [cartView])


    useEffect(() => {
        axios.get(VITE_BASE_LINK + 'search_bar').then((response) => {
            // console.log(response?.data)
            setAllproductsApiData(response?.data)
        })
    }, [])

    useEffect(() => {
        setSearchData('');
    }, [location?.pathname])


    useEffect(() => {
        console.log(allproductsApiData)
    }, [allproductsApiData])


    return (
        <>
            {/* <nav className='hidden md:block w-full bg-[color:var(--primary-color)] z-[400] fixed top-0'>
                <div className='w-full flex justify-between py-2 relative'>

                    
                    <NavLink to='/' className='w-full max-w-[260px] flex justify-center items-center'>
                        <img src={logo} className="cursor-pointer" alt="" />
                    </NavLink>

                    
                    <div className='w-full max-w-[1000px] flex justify-evenly items-center'>
                        <Link to='/blogs' className='w-fit cursor-pointer'>
                            <img src={blog} className='w-full max-w-[40px]' alt="" />
                        </Link>
                        <div className='w-fit cursor-pointer relative'>
                            <img src={products} className={`w-full max-w-[55px]`} alt="" onClick={() => setProductsHover(!productsHover)} />
                            <div className={`absolute w-[160px] top-[55px] -left-[96%] overflow-hidden transition-all duration-300 scrollbar-hide bg-white rounded-[5px] shadow-xl p-0 z-[130] ${productsHover ? 'h-[310px] overflow-y-scroll ease-in px-2 pt-4' : 'h-0 ease-out'}`}>
                                {
                                    navbar?.category_list?.map((data, i) => (
                                        <Link to={`/all-products/` + data?.id} key={i} className='w-full block px-3 border-b py-[8px] hover:bg-gray-100' onClick={() => setProductsHover(false)}>
                                            <h1 className='text-[13px] poppins'>{data?.title}</h1>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className={`fixed inset-0 bg-black opacity-20 transition-all duration-300 z-[100] ${productsHover ? 'block ease-in' : 'hidden ease-out'}`} onClick={() => setProductsHover(false)}></div>
                        </div>
                        <Link to='/doctors' className='w-fit cursor-pointer'>
                            <img src={doctors} className='w-full max-w-[47px]' alt="" />
                        </Link>
                    </div>

                    
                    <div className='w-full max-w-[200px] mr-[40px] flex justify-around items-center'>
                        <Link to='/account' className='w-fit cursor-pointer'>
                            <img src={profile} className="w-full max-w-[25px]" alt="" />
                        </Link>
                        <div className='w-fit cursor-pointer'>
                            <img src={search} className="w-full max-w-[25px]" alt="" />
                        </div>
                        <NavLink to='/cart' className='w-fit cursor-pointer' onMouseEnter={() => setCartView(true)} onMouseLeave={() => setCartView(false)}>
                            <img src={cart} className="w-full max-w-[25px]" alt="" />
                        </NavLink>
                        <div className={`absolute poppins max-w-[500px] right-[3%] top-[65%] bg-[#f2f2f2] transition-all duration-100 ${cartView ? 'visible ease-in w-full max-h-[400px] pb-3' : 'invisible ease-out max-h-0 max-w-0 overflow-hidden'} shadow-md `} onMouseEnter={() => setCartView(true)} onMouseLeave={() => setCartView(false)}>
                            <div className='w-[95%] px-2 mx-auto max-h-[190px] overflow-y-scroll mt-6 bg-white border pt-2'>
                                {
                                    cartData?.cartItems?.length > 0 ?
                                        <>
                                            {
                                                cartData?.cartItems?.map((data, i) => (
                                                    <div key={i} className='w-full flex justify-between shadow-md bg-[#f5f5f5] mb-4 px-2 py-1'>
                                                        <div className='w-full flex justify-start items-center gap-2'>
                                                            <div className='w-fit'>
                                                                <img src={VITE_BASE_LINK + data?.image} className='w-full max-w-[40px]' alt="" />
                                                            </div>
                                                            <div className='w-full flex flex-col'>
                                                                <div className='w-full'>
                                                                    <h1 className='text-[13px] font-[500]'>{data?.name}</h1>
                                                                </div>
                                                                <div className=''>
                                                                    <h1 className='text-[12px]'>qty: x{data?.quantity}</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-full max-w-[70px] flex justify-center items-center gap-3'>
                                                            <div className='text-[20px] cursor-pointer font-[300]' onClick={async () => {
                                                                let formdata = new FormData()
                                                                formdata.append('prod_id', data?.product_id)
                                                                formdata.append('token', localStorage.getItem('token'))
                                                                formdata.append('update_type', '-')
                                                                await axios.post(VITE_BASE_LINK + 'CartUpdate', formdata).then((response) => {
                                                                    console.log(response?.data)
                                                                    toast.warn('Item quantity decreased', {
                                                                        position: "top-right",
                                                                        autoClose: 2000,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        progress: undefined,
                                                                        theme: "colored",
                                                                    })
                                                                })
                                                                await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                                    console.log(response?.data)
                                                                    setCartData(response?.data)
                                                                })
                                                            }}>-</div>
                                                            <div className='text-[14px] font-[300]'>{data?.quantity}</div>
                                                            <div className='text-[20px] cursor-pointer font-[300]' onClick={async () => {
                                                                let formdata = new FormData()
                                                                formdata.append('prod_id', data?.product_id)
                                                                formdata.append('token', localStorage.getItem('token'))
                                                                formdata.append('update_type', '+')
                                                                await axios.post(VITE_BASE_LINK + 'CartUpdate', formdata).then((response) => {
                                                                    console.log(response?.data)
                                                                    toast.warn('Item quantity increased', {
                                                                        position: "top-right",
                                                                        autoClose: 2000,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        progress: undefined,
                                                                        theme: "colored",
                                                                    })
                                                                })
                                                                await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                                    setCartData(response?.data)
                                                                })
                                                            }}>+</div>
                                                        </div>
                                                        <div className='w-fit min-w-[60px] flex justify-center items-center'>
                                                            <h1 className='text-[15px] font-[500]'>₹ {data?.price}</h1>
                                                        </div>
                                                        <div className='w-full max-w-[50px] flex justify-center items-center'>
                                                            <img src={cross} className='w-full max-w-[13px] cursor-pointer' alt="" onClick={async () => {
                                                                let formdata = new FormData()
                                                                formdata.append('prod_id', data?.product_id)
                                                                formdata.append('token', localStorage.getItem('token'))
                                                                await axios.post(VITE_BASE_LINK + 'CartitemDelete', formdata).then((response) => {
                                                                    console.log(response?.data)
                                                                    toast.warn('Item deleted successfully', {
                                                                        position: "top-right",
                                                                        autoClose: 2000,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        progress: undefined,
                                                                        theme: "colored",
                                                                    })
                                                                })
                                                                await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                                    setCartData(response?.data)
                                                                })
                                                            }} />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </>
                                        :
                                        <div className='w-full flex justify-center items-center mb-2'>
                                            <h1 className='text-[13px] poppins'>No items in your cart</h1>
                                        </div>
                                }
                            </div>
                            <div className='w-full flex justify-end pr-3 items-center mt-2'>
                                <div className='w-[70%] flex justify-between items-end bg-[#ffffff80] px-2 py-3'>
                                    <div className='w-full flex justify-start gap-2 items-center'>
                                        <h1 className='text-[13px]'>Cart Total:</h1>
                                        <h1 className='text-[16px] font-[500]'>₹ {cartData?.cart_total?.final_price}</h1>
                                    </div>
                                    <div className='w-full flex justify-end items-center'>
                                        <Link to='/cart'><button className='px-3 py-1 bg-[color:var(--button-primary)] text-[12px] shadow-md'>Go to cart & checkout</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}

            <nav className='hidden md:block w-full bg-[color:var(--primary-color)] z-[400] fixed top-0'>
                <div className='w-full flex justify-center items-center shadow-md '>
                    <div className='w-[70%] flex justify-start items-center gap-14 pl-14'>
                        <div className='w-fit'>
                            <NavLink to='/' className='flex justify-center items-center'>
                                <img src={logo} className="cursor-pointer w-[70px]" alt="" />
                            </NavLink>
                        </div>
                        <div className='w-[70%] relative'>
                            <div className=' rounded-[5px] bg-white flex px-2 py-2 w-full'>
                                <span className=' flex justify-center items-center'><img src={search} className="w-[16px]" /></span><input className='rounded-[15px] text-[13px] poppins w-full outline-none pl-2' placeholder='Search Products' onChange={(e) => {
                                    setSearchData(e?.target?.value)
                                }} type="text" />
                                <div className={`absolute top-[100%] mt-[2px] left-0 rounded-b-[10px] shadow-md w-full bg-white overflow-hidden transition-all ${searchData?.length > 0 ? 'max-h-[400px] overflow-y-scroll ease-in' : 'max-h-0 ease-out'}`}>
                                    <div className='w-full'>
                                        {
                                            allproductsApiData?.length > 0 ?
                                                <>
                                                    {
                                                        allproductsApiData?.filter((filterValue) => {
                                                            if (searchData === '') {
                                                                return filterValue
                                                            } else if (filterValue?.title?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                                                                return filterValue
                                                            }
                                                        })?.map((data, i) => (
                                                            <Link to={`/single-product/` + data?.id} key={i} className='w-full block hover:bg-gray-100 border-b py-2 poppins px-3 cursor-pointer'>
                                                                <div className='w-full flex justify-start items-center gap-3'>
                                                                    <div className='w-fit'>
                                                                        <img src={VITE_BASE_LINK + data?.image} className='w-[40px]' alt="" />
                                                                    </div>
                                                                    <div className='w-fit'>
                                                                        <h1 className='text-[13px] font-[500] text-gray-700'>{data?.title}</h1>
                                                                        <h1 className='text-[10px] font-[400] text-gray-400'>{data?.category}</h1>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    }
                                                </>
                                                :
                                                <div className='w-full h-[300px] flex justify-center items-center'>
                                                    <h1 className='poppins text-[12px] font-[400] text-gray-600'>Sorry, we couldn't find any matches</h1>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] flex justify-end gap-6 pr-10 items-center'>
                        {/* <Link to='/blogs' className='w-fit cursor-pointer'>
                            <img src={blog} className='w-full max-w-[30px]' alt="" />
                        </Link>
                        <Link to='/doctors' className='w-fit cursor-pointer'>
                            <img src={doctors} className='w-full max-w-[30px]' alt="" />
                        </Link> */}
                        <Link to='/account' className='w-fit cursor-pointer'>
                            <img src={profile} className="w-full max-w-[30px]" alt="" />
                        </Link>

                        {
                            localStorage.getItem('token') ?
                                <div className='w-fit'>
                                    <img src={logout} className='w-[30px] cursor-pointer' onClick={() => {
                                        localStorage.clear()
                                        navigate('/login')
                                    }} alt="" />
                                </div>
                                :
                                ''
                        }

                        <div className='relative'>
                            <NavLink to='/cart' className='w-fit cursor-pointer' onMouseEnter={() => setCartView(true)} onMouseLeave={() => setCartView(false)}>
                                {
                                    cartData?.cartItems?.length > 0 ?
                                        <div className='relative flex justify-center items-center p-[6px]'>
                                            <div className='bg-red-500 h-[7px] w-[7px] rounded-full absolute top-0 right-0'></div>
                                            <img src={cart} className='w-[30px] cursor-pointer' alt="" />
                                        </div>
                                        :
                                        <img src={cart} className='w-[30px] cursor-pointer' alt="" />
                                }
                            </NavLink>


                            {/* cart popup */}
                            <div className={`absolute poppins w-[500px] right-[3%] top-[65%] bg-[#f2f2f2] transition-all duration-100 ${cartView ? 'visible ease-in max-h-[400px] w-full pb-3' : 'invisible ease-out max-h-0 max-w-0 overflow-hidden'} shadow-md `} onMouseEnter={() => setCartView(true)} onMouseLeave={() => setCartView(false)}>
                                <div className='w-[95%] px-2 mx-auto max-h-[190px] overflow-y-scroll mt-6 bg-white border pt-2'>
                                    {
                                        cartData?.cartItems?.length > 0 ?
                                            <>
                                                {
                                                    cartData?.cartItems?.map((data, i) => (
                                                        <div key={i} className='w-full flex justify-between shadow-md bg-[#f5f5f5] mb-4 px-2 py-1'>
                                                            <div className='w-full flex justify-start items-center gap-2'>
                                                                <div className='w-fit'>
                                                                    <img src={VITE_BASE_LINK + data?.image} className='w-full max-w-[40px]' alt="" />
                                                                </div>
                                                                <div className='w-full flex flex-col'>
                                                                    <div className='w-full'>
                                                                        <h1 className='text-[13px] font-[500]'>{data?.name}</h1>
                                                                    </div>
                                                                    <div className=''>
                                                                        <h1 className='text-[12px]'>qty: x{data?.quantity}</h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-full max-w-[70px] flex justify-center items-center gap-3'>
                                                                <div className='text-[20px] cursor-pointer font-[300]' onClick={async () => {
                                                                    let formdata = new FormData()
                                                                    formdata.append('prod_id', data?.product_id)
                                                                    formdata.append('token', localStorage.getItem('token'))
                                                                    formdata.append('price', data?.unit_price)
                                                                    formdata.append('size', data?.size)
                                                                    formdata.append('update_type', '-')
                                                                    await axios.post(VITE_BASE_LINK + 'CartUpdate', formdata).then((response) => {
                                                                        // console.log(response?.data)
                                                                        toast.warn(response?.data?.message, {
                                                                            position: "top-right",
                                                                            autoClose: 2000,
                                                                            hideProgressBar: false,
                                                                            closeOnClick: true,
                                                                            pauseOnHover: true,
                                                                            progress: undefined,
                                                                            theme: "colored",
                                                                        })
                                                                    })
                                                                    await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                                        // console.log(response?.data)
                                                                        setCartData(response?.data)
                                                                    })
                                                                }}>-</div>
                                                                <div className='text-[14px] font-[300]'>{data?.quantity}</div>
                                                                <div className='text-[20px] cursor-pointer font-[300]' onClick={async () => {
                                                                    let formdata = new FormData()
                                                                    formdata.append('prod_id', data?.product_id)
                                                                    formdata.append('token', localStorage.getItem('token'))
                                                                    formdata.append('price', data?.unit_price)
                                                                    formdata.append('size', data?.size)
                                                                    formdata.append('update_type', '+')
                                                                    await axios.post(VITE_BASE_LINK + 'CartUpdate', formdata).then((response) => {
                                                                        // console.log(response?.data)
                                                                        toast.warn(response?.data?.message, {
                                                                            position: "top-right",
                                                                            autoClose: 2000,
                                                                            hideProgressBar: false,
                                                                            closeOnClick: true,
                                                                            pauseOnHover: true,
                                                                            progress: undefined,
                                                                            theme: "colored",
                                                                        })
                                                                    })
                                                                    await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                                        setCartData(response?.data)
                                                                    })
                                                                }}>+</div>
                                                            </div>
                                                            <div className='w-fit min-w-[60px] flex justify-center items-center'>
                                                                <h1 className='text-[15px] font-[500]'>₹ {data?.price}</h1>
                                                            </div>
                                                            <div className='w-full max-w-[50px] flex justify-center items-center'>
                                                                <img src={cross} className='w-full max-w-[13px] cursor-pointer' alt="" onClick={async () => {
                                                                    let formdata = new FormData()
                                                                    formdata.append('prod_id', data?.product_id)
                                                                    formdata.append('token', localStorage.getItem('token'))
                                                                    formdata.append('price', data?.unit_price)
                                                                    formdata.append('size', data?.size)
                                                                    await axios.post(VITE_BASE_LINK + 'CartitemDelete', formdata).then((response) => {
                                                                        // console.log(response?.data)
                                                                        toast.warn(response?.data?.message, {
                                                                            position: "top-right",
                                                                            autoClose: 2000,
                                                                            hideProgressBar: false,
                                                                            closeOnClick: true,
                                                                            pauseOnHover: true,
                                                                            progress: undefined,
                                                                            theme: "colored",
                                                                        })
                                                                    })
                                                                    await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                                        setCartData(response?.data)
                                                                    })
                                                                }} />
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                            :
                                            <div className='w-full flex justify-center items-center mb-2'>
                                                <h1 className='text-[13px] poppins'>No items in your cart</h1>
                                            </div>
                                    }
                                </div>
                                <div className='w-full flex justify-end pr-3 items-center mt-2'>
                                    <div className='w-[70%] flex justify-between items-end bg-[#ffffff80] px-2 py-3'>
                                        <div className='w-full flex justify-start gap-2 items-center'>
                                            <h1 className='text-[13px]'>Cart Total:</h1>
                                            <h1 className='text-[16px] font-[500]'>₹ {cartData?.cart_total?.final_price}</h1>
                                        </div>
                                        <div className='w-full flex justify-end items-center'>
                                            <Link to='/cart'><button className='px-3 py-1 bg-[color:var(--button-primary)] text-[12px] shadow-md'>Go to cart & checkout</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </nav>


            {/* mobie */}
            <nav className='block sticky top-0 md:hidden w-full bg-[color:var(--primary-color)] min-h-[10vh] z-[400]'>
                <div className='w-full relative flex justify-between items-center'>

                    <div className='flex-1'>

                    </div>
                    {/* logo */}
                    <span className=' flex justify-center items-center flex-1'>
                        <Link to='/'><img src={logo} className="cursor-pointer w-[100px]" alt="" /></Link>
                    </span>

                    <div className='w-fit mt-8 flex-1 flex justify-end items-end gap-4'>
                        {
                            cartData?.cartItems?.length > 0 ?
                                <Link to='/cart'>
                                    <div className='relative flex justify-center items-center p-[4px]'>
                                        <div className='bg-red-500 h-[7px] w-[7px] rounded-full absolute top-0 right-0'></div>
                                        <img src={cart} className='min-w-[28px] cursor-pointer' alt="" />
                                    </div>
                                </Link>
                                :
                                <Link to='/cart'><img src={cart} className='w-[20px] cursor-pointer' alt="" /></Link>
                        }
                        <div className=' flex justify-center items-center' onClick={() => setSidebarToggle(true)}>
                            <img src={sidebar_icon} className='w-[28px] cursor-pointer mr-2' alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar