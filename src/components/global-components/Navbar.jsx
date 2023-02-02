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

const Navbar = () => {

    const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarAtom);

    const [productsHover, setProductsHover] = useState(false);

    // useEffect(() => {
    //   console.log(sidebarToggle)
    // }, [sidebarToggle])



    return (
        <>
            <nav className='hidden md:block w-full bg-[color:var(--primary-color)] z-[400] fixed top-0'>
                <div className='w-full flex justify-between py-2'>

                    {/* logo */}
                    <NavLink to='/' className='w-full max-w-[260px] flex justify-center items-center'>
                        <img src={logo} className="cursor-pointer" alt="" />
                    </NavLink>

                    {/* nav items */}
                    <div className='w-full max-w-[1000px] flex justify-evenly items-center'>
                        <div className='w-fit cursor-pointer'>
                            <img src={blog} className='w-full max-w-[40px]' alt=""/>
                        </div>
                        {/* <div className='w-fit cursor-pointer'>
                            <img src={mom_baby} className='w-full max-w-[83px]' alt="" />
                        </div> */}
                        <div className='w-fit cursor-pointer relative'>
                            <img src={products} className={`w-full max-w-[55px]`} alt=""  onClick={() => setProductsHover(!productsHover)} />
                            <div className={`absolute w-[160px] top-[55px] -left-[96%] overflow-hidden transition-all duration-300 scrollbar-hide bg-white rounded-[5px] shadow-xl p-0 ${productsHover ? 'h-[310px] overflow-y-scroll ease-in px-2 pt-4' : 'h-0 ease-out'}`}>
                                {
                                    navbar?.category_list?.map((data, i) => (
                                        <Link to={`/all-products/` + data?.id} key={i} className='w-full block px-3 border-b py-[8px] hover:bg-gray-100' onClick={() => setProductsHover(false)}>
                                            <h1 className='text-[13px] poppins'>{data?.title}</h1>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-fit cursor-pointer'>
                            <img src={doctors} className='w-full max-w-[47px]' alt="" />
                        </div>
                    </div>

                    {/* icon */}
                    <div className='w-full max-w-[200px] mr-[40px] flex justify-around items-center'>
                        <div className='w-fit cursor-pointer'>
                            <img src={profile} className="w-full max-w-[25px]" alt="" />
                        </div>
                        <div className='w-fit cursor-pointer'>
                            <img src={search} className="w-full max-w-[25px]" alt="" />
                        </div>
                        <NavLink to='/cart' className='w-fit cursor-pointer'>
                            <img src={cart} className="w-full max-w-[25px]" alt="" />
                        </NavLink>
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