import React, { useEffect, useState } from 'react'
import logo from '../../assets/icons/realvedic-logo.svg'
import blog from '../../assets/icons/blog.svg'
import mom_baby from '../../assets/icons/mom&baby.svg'
import products from '../../assets/icons/products.svg'
import doctors from '../../assets/icons/doctors.svg'
import profile from '../../assets/icons/profile.svg'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import sidebar_icon from '../../assets/icons/sidebar-icon.svg'
import sidebarAtom from '../../recoil/atoms/sidebarAtom'
import { useRecoilState } from 'recoil'
import { Link, NavLink } from 'react-router-dom'
import navbar from '../../mockApi/navbarApi'
import item from '../../assets/images/about-us.png'

const Navbar = () => {

    const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarAtom);

    const [productsHover, setProductsHover] = useState(false);

    const [cartView, setCartView] = useState(false);

    const cart_data = {
        item_total: '530',
        items: [
            // { id: 0, image: item, title: 'Garlic Rasam Powder | Instant Mix ', quantity: '1', price: '180', },
            // { id: 1, image: item, title: 'Lemon Grass Rasam | Instant Mix ', quantity: '3', price: '450', },
            // { id: 2, image: item, title: 'Garlic Rasam Powder | Instant Mix ', quantity: '2', price: '360', },
            // { id: 3, image: item, title: 'Lemon Grass Rasam | Instant Mix ', quantity: '1', price: '200', },
            // { id: 4, image: item, title: 'Garlic Rasam Powder | Instant Mix ', quantity: '1', price: '180', },
        ],
    };


    // useEffect(() => {
    //   console.log(sidebarToggle)
    // }, [sidebarToggle])



    return (
        <>
            <nav className='hidden md:block w-full bg-[color:var(--primary-color)] z-[400] fixed top-0'>
                <div className='w-full flex justify-between py-2 relative'>

                    {/* logo */}
                    <NavLink to='/' className='w-full max-w-[260px] flex justify-center items-center'>
                        <img src={logo} className="cursor-pointer" alt="" />
                    </NavLink>

                    {/* nav items */}
                    <div className='w-full max-w-[1000px] flex justify-evenly items-center'>
                        <Link to='/blogs' className='w-fit cursor-pointer'>
                            <img src={blog} className='w-full max-w-[40px]' alt="" />
                        </Link>
                        {/* <div className='w-fit cursor-pointer'>
                            <img src={mom_baby} className='w-full max-w-[83px]' alt="" />
                        </div> */}
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

                    {/* icon */}
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
                                    cart_data?.items?.length > 0 ? 
                                    <>
                                    {
                                        cart_data?.items?.map((data, i) => (
                                            <div key={i} className='w-full flex justify-between shadow-md bg-[#f5f5f5] mb-4 px-2 py-1'>
                                                <div className='w-full flex justify-start items-center gap-2'>
                                                    <div className='w-fit'>
                                                        <img src={data?.image} className='w-full max-w-[40px]' alt="" />
                                                    </div>
                                                    <div className='w-full flex flex-col'>
                                                        <div className='w-full'>
                                                            <h1 className='text-[13px] font-[500]'>{data?.title}</h1>
                                                        </div>
                                                        <div className=''>
                                                            <h1 className='text-[12px]'>qty: x{data?.quantity}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full max-w-[60px] flex justify-center items-center gap-3'>
                                                    <div className='text-[20px] cursor-pointer'>-</div>
                                                    <div className='text-[17px] font-[500]'>1</div>
                                                    <div className='text-[20px] cursor-pointer'>+</div>
                                                </div>
                                                <div className='w-fit min-w-[60px] flex justify-center items-center'>
                                                    <h1 className='text-[13px] font-[500]'>Rs {data?.price}</h1>
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
                                        <h1 className='text-[15px] font-[500]'>Rs {cart_data?.item_total}</h1>
                                    </div>
                                    <div className='w-full flex justify-end items-center'>
                                        <Link to='/cart'><button className='px-3 py-1 bg-[color:var(--button-primary)] text-[12px] shadow-md'>Go to cart & checkout</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            {/* mobie */}
            <nav className='block sticky top-0 md:hidden w-full bg-[color:var(--primary-color)] min-h-[10vh] z-[400]'>
                <div className='w-full relative flex justify-between items-center py-2'>

                    <div className='flex-1'>

                    </div>
                    {/* logo */}
                    <span className=' flex justify-center items-center flex-1'>
                        <img src={logo} className="cursor-pointer w-[100px]" alt="" />
                    </span>

                    <div className='w-fit mt-8 flex-1 flex justify-end items-center'>
                        <img src={sidebar_icon} className='w-[25px] cursor-pointer mr-2 mb-2' alt="" onClick={() => setSidebarToggle(true)} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar