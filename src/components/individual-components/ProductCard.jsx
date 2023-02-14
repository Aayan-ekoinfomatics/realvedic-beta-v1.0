import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import { VITE_BASE_LINK } from '../../../baseLink'
import cartPageAtom from '../../recoil/atoms/cartPageAtom'
import arrow from '../../assets/images/down-arrow.png'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom'

const ProductCard = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    const [variantDropdown, setVariantDropdown] = useState(false);

    const [selectedProductID, setSelectedProductID] = useState();

    const [cartData, setCartData] = useRecoilState(cartPageAtom)

    const location = useLocation();


    useEffect(() => {
        // console.log("cartData", props?.weight)


    }, [props]);


    return (
        <>

            <div className='w-full border shadow-md p-2'>
                <Link to={`/single-product/` + props?.id} className='w-full flex justify-center items-center'>
                    <img src={VITE_BASE_LINK + props?.image} className='w-[85%] mx-auto' alt="" />
                </Link>
                <div className='w-full flex justify-between items-center mt-1'>
                    <div className='w-full lg:w-[51%] xl:w-auto'>
                        <h1 className='poppins text-[13px]'>{props?.title}</h1>
                    </div>
                    <div className='w-full min-w-[100px] pt-1 px-[6px] flex justify-end items-center relative gap-2 cursor-pointer' onClick={() => {
                        // console.log('clicked')
                        setVariantDropdown(!variantDropdown);
                        if (selectedProductID) {
                            setSelectedProductID(null);

                        } else {
                            setSelectedProductID(props?.id)
                        }
                    }}>
                        <h1 className='poppins text-[12px] font-[600]'>
                            {props?.weight[activeIndex]}
                        </h1>
                        <span><img src={arrow} className='w-[14px]' alt="" /></span>
                        <div className={`w-full overflow-hidden absolute top-[100%] transition-all duration-300 bg-white shadow-2xl ${variantDropdown === true ? 'max-h-[120px] px-2 py-3 ease-in z-[150]' : 'max-h-0 ease-out'}`}>
                            {
                                props?.weight?.map((data, i) => (
                                    <div key={i} onClick={() => {
                                        setVariantDropdown(false);
                                        setActiveIndex(i)
                                    }} className='border-b py-1 text-[12px] poppins cursor-pointer'>{data}</div>
                                ))
                            }
                        </div>
                        <div className={`fixed inset-0 bg-black opacity-20 ${variantDropdown ? 'block z-[120]' : 'hidden z-[0]'}`} onClick={() => setVariantDropdown(false)}>

                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-end items-center mt-1' onClick={() => {
                    // cartData?.cartItems?.find((function (data, i) {
                    //     if (data?.product_id == props?.id) {
                    //         console.log(true)
                    //     } else {
                    //         console.log(false)
                    //     }
                    // }))
                }}>

                    {
                        cartData?.cartItems?.length > 0 ?
                            <>
                                {
                                    props?.status ?
                                        <div className='w-full flex justify-between items-center mt-1'>
                                            <div className='flex justify-end'>
                                                <div className='w-fit'>
                                                    <h1 className='poppins text-[15px] font-[400]'>Rs {props?.price[activeIndex]}</h1>
                                                </div>
                                            </div>
                                            <div className='flex gap-2'>
                                                <button className='text-[18px] px-2 bg-[#b4b4b4]' onClick={async () => {
                                                    let formdata = new FormData()
                                                    formdata.append('prod_id', props?.id)
                                                    formdata.append('token', localStorage.getItem('token'))
                                                    formdata.append('price', props?.price[activeIndex])
                                                    formdata.append('size', props?.weight[activeIndex])
                                                    formdata.append('update_type', '-')
                                                    await axios.post(VITE_BASE_LINK + 'CartUpdate', formdata).then((response) => {
                                                        console.log(response?.data)
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
                                                        console.log(response?.data)
                                                        setCartData(response?.data)
                                                    })
                                                    if (location?.pathname === "/") {
                                                        await axios.get(VITE_BASE_LINK + 'write_data?token=' + localStorage?.getItem('token')).then((response) => {
                                                            // console.log(response?.data)
                                                            setLandingApiData(response?.data)
                                                        })
                                                    }
                                                }}>-</button>
                                                <span className='text-[17px] font-[500] w-full max-w-[100px] bg-white border border-[#696969] px-6'>
                                                    {
                                                        cartData?.cartItems?.map((data, i) => {
                                                            if (data?.product_id == props?.id) {
                                                                return <h1 key={i}>{data?.quantity}</h1>
                                                            }
                                                        })
                                                    }
                                                </span>
                                                <button className='text-[18px] px-2 bg-[#b4b4b4]' onClick={async () => {
                                                    let formdata = new FormData()
                                                    formdata.append('prod_id', props?.id)
                                                    formdata.append('token', localStorage.getItem('token'))
                                                    formdata.append('price', props?.price[activeIndex])
                                                    formdata.append('size', props?.weight[activeIndex])
                                                    formdata.append('update_type', '+')
                                                    await axios.post(VITE_BASE_LINK + 'CartUpdate', formdata).then((response) => {
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
                                                    if (location?.pathname === "/") {
                                                        await axios.get(VITE_BASE_LINK + 'write_data?token=' + localStorage?.getItem('token')).then((response) => {
                                                            // console.log(response?.data)
                                                            setLandingApiData(response?.data)
                                                        })
                                                    }
                                                }}>+</button>
                                            </div>
                                        </div>
                                        :
                                        <div className='w-full flex justify-between items-center mt-1'>
                                            <div className='flex justify-end'>
                                                <div className='w-fit'>
                                                    <h1 className='poppins text-[15px] font-[400]'>Rs {props?.price[activeIndex]}</h1>
                                                </div>
                                            </div>
                                            <button className='bg-[#FCF55C] w-full max-w-[80px] active:bg-[#f5ec4b] px-3 shadow-md py-[2px] poppins text-[15px] font-[500] cursor-pointer active:scale-[0.98]' onClick={async () => {
                                                let formdata = new FormData();
                                                // console.log(props.id)
                                                formdata.append('product_id', props?.id);
                                                formdata.append('token', localStorage.getItem('token'));
                                                formdata.append('size', props?.weight[activeIndex]);
                                                formdata.append('price', props?.price[activeIndex]),
                                                    await axios.post(VITE_BASE_LINK + 'add_to_cart', formdata).then((response) => {
                                                        console.log(response?.data)
                                                        if (response?.data?.status) {
                                                            toast.success(response?.data?.message, {
                                                                position: "top-right",
                                                                autoClose: 2000,
                                                                hideProgressBar: false,
                                                                closeOnClick: true,
                                                                pauseOnHover: true,
                                                                progress: undefined,
                                                                theme: "colored",
                                                            })
                                                        } else {
                                                            console.log(response?.data)
                                                        }
                                                    })
                                                await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                    // console.log(response?.data)
                                                    setCartData(response?.data)
                                                })
                                                if (location?.pathname === "/") {
                                                    await axios.get(VITE_BASE_LINK + 'write_data?token=' + localStorage?.getItem('token')).then((response) => {
                                                        // console.log(response?.data)
                                                        setLandingApiData(response?.data)
                                                    })
                                                }
                                            }}>+ ADD</button>
                                        </div>
                                }
                            </>
                            :
                            <div className='w-full flex justify-between items-center mt-1'>
                                <div className='flex justify-end'>
                                    <div className='w-fit'>
                                        <h1 className='poppins text-[15px] font-[400]'>Rs {props?.price[activeIndex]}</h1>
                                    </div>
                                </div>
                                <button className='bg-[#FCF55C] w-full max-w-[80px] active:bg-[#f5ec4b] px-3 shadow-md py-[2px] poppins text-[15px] font-[500] cursor-pointer active:scale-[0.98]' onClick={async () => {
                                    let formdata = new FormData();
                                    // console.log(props.id)
                                    formdata.append('product_id', props?.id);
                                    formdata.append('token', localStorage.getItem('token'));
                                    formdata.append('size', props?.weight[activeIndex]);
                                    formdata.append('price', props?.price[activeIndex]),
                                        await axios.post(VITE_BASE_LINK + 'add_to_cart', formdata).then((response) => {
                                            console.log(response?.data)
                                            if (response?.data?.status) {
                                                toast.success(response?.data?.message, {
                                                    position: "top-right",
                                                    autoClose: 2000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                })
                                            } else {
                                                toast.warn('Please log in first', {
                                                    position: "top-right",
                                                    autoClose: 2000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                })
                                            }
                                        })
                                    await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                        // console.log(response?.data)
                                        setCartData(response?.data)
                                    })
                                    if (location?.pathname === "/") {
                                        await axios.get(VITE_BASE_LINK + 'write_data?token=' + localStorage?.getItem('token')).then((response) => {
                                            // console.log(response?.data)
                                            setLandingApiData(response?.data)
                                        })
                                    }
                                }}>+ ADD</button>
                            </div>
                    }



                    {/* {
                        cartData?.cartItems?.length > 0 ?

                            <div className='w-full'>{
                                cartData?.cartItems?.map((data, i) => {
                                    if (data?.cart_status) {
                                        return (
                                            <div className='w-full flex justify-between items-center mt-1'>
                                                <div className='flex justify-end'>
                                                    <div className='w-fit'>
                                                        <h1 className='poppins text-[15px] font-[400]'>Rs {props?.price[activeIndex]}</h1>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <button className='text-[16px]' onClick={async () => {
                                                        let formdata = new FormData()
                                                        formdata.append('prod_id', data?.product_id)
                                                        formdata.append('token', localStorage.getItem('token'))
                                                        formdata.append('price', data?.unit_price)
                                                        formdata.append('size', data?.size)
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
                                                                theme: "light",
                                                            })
                                                        })
                                                        await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                            console.log(response?.data)
                                                            setCartData(response?.data)
                                                        })
                                                    }}>-</button>
                                                    <p className='text-[17px] font-[500] w-full max-w-[100px]'>{data?.quantity}</p>
                                                    <button className='text-[16px]' onClick={async () => {
                                                        let formdata = new FormData()
                                                        formdata.append('prod_id', data?.product_id)
                                                        formdata.append('token', localStorage.getItem('token'))
                                                        formdata.append('price', data?.unit_price)
                                                        formdata.append('size', data?.size)
                                                        formdata.append('update_type', '+')
                                                        await axios.post(VITE_BASE_LINK + 'CartUpdate', formdata).then((response) => {
                                                            toast.warn('Item quantity decreased', {
                                                                position: "top-right",
                                                                autoClose: 2000,
                                                                hideProgressBar: false,
                                                                closeOnClick: true,
                                                                pauseOnHover: true,
                                                                progress: undefined,
                                                                theme: "light",
                                                            })
                                                        })
                                                        await axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
                                                            console.log(response?.data)
                                                            setCartData(response?.data)
                                                        })
                                                    }}>+</button>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        console.log('Button', data?.product_id == props?.id)
                                        return (
                                            <div className='w-full flex justify-between items-center mt-1'>
                                                <div className='flex justify-end'>
                                                    <div className='w-fit'>
                                                        <h1 className='poppins text-[15px] font-[400]'>Rs {props?.price[activeIndex]}</h1>
                                                    </div>
                                                </div>
                                                <button className='bg-[#FCF55C] w-full max-w-[80px] active:bg-[#f5ec4b] px-3 shadow-md py-[2px] poppins text-[15px] font-[500] cursor-pointer active:scale-[0.98]' onClick={async () => {
                                                    let formdata = new FormData();
                                                    console.log(props.id)
                                                    formdata.append('product_id', props?.id);
                                                    formdata.append('token', localStorage.getItem('token'));
                                                    formdata.append('size', props?.weight[activeIndex]);
                                                    formdata.append('price', props?.price[activeIndex]),
                                                        axios.post(VITE_BASE_LINK + 'add_to_cart', formdata).then((response) => {
                                                            console.log(response?.data)
                                                            if (response?.data?.status === true) {
                                                                toast.success(response?.data?.message, {
                                                                    position: "top-right",
                                                                    autoClose: 2000,
                                                                    hideProgressBar: false,
                                                                    closeOnClick: true,
                                                                    pauseOnHover: true,
                                                                    progress: undefined,
                                                                    theme: "light",
                                                                })
                                                            } else {
                                                                console.log('sklnaso')
                                                            }
                                                        })
                                                }}>+ ADD</button>
                                            </div>
                                        )
                                    }
                                })
                            }
                            </div>
                            :
                            <div className='w-full flex justify-between items-center mt-1'>
                                <div className='flex justify-end'>
                                    <div className='w-fit'>
                                        <h1 className='poppins text-[15px] font-[400]'>Rs {props?.price[activeIndex]}</h1>
                                    </div>
                                </div>
                                <button className='bg-[#FCF55C] w-full max-w-[80px] active:bg-[#f5ec4b] px-3 shadow-md py-1 poppins text-[15px] font-[500] cursor-pointer active:scale-[0.98]' onClick={async () => {
                                    let formdata = new FormData();
                                    console.log(props.id)
                                    formdata.append('product_id', props?.id);
                                    formdata.append('token', localStorage.getItem('token'));
                                    formdata.append('size', props?.weight[activeIndex]);
                                    formdata.append('price', props?.price[activeIndex]),
                                        axios.post(VITE_BASE_LINK + 'add_to_cart', formdata).then((response) => {
                                            console.log(response?.data)
                                            if (response?.data?.status === true) {
                                                // alert(response?.data?.message)
                                                toast.success(response?.data?.message, {
                                                    position: "top-right",
                                                    autoClose: 2000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    // draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                })
                                            } else {
                                                console.log('sklnaso')
                                            }
                                        })
                                }}>+ ADD</button>
                            </div>
                    } */}
                </div>
            </div>

        </>



    )
}

export default ProductCard