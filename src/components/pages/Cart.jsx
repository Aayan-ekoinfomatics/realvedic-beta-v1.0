// React
import React, { useEffect, useState } from "react";

// State Mangement (Recoil JS)
import { useRecoilState } from "recoil";
import cartPageAtom from "../../recoil/atoms/cartPageAtom";

// Media files
import cross from "../../assets/icons/cross.svg";
import down from '../../assets/icons/down-arrow-thin.svg'


import cartData from "../../mockApi/cartDataApi";
import axios from "axios";
import { VITE_BASE_LINK } from "../../../baseLink";
import { Link } from "react-router-dom";


const CartPage = () => {
    // GlobalVariables
    //   const [cartData, setCartData] = useRecoilState(cartPageAtom)

    // local variables
    const [cartDataApi, setCartDataApi] = useState([]);
    const [priceBreakdown, setPriceBreakdown] = useState(false);

    // useEffect(() => {
    //     console.log(cartDataApi)
    // }, [])

    useEffect(() => {
        let formdata = new FormData();
        formdata.append('token', localStorage.getItem('token'))
        axios.post(VITE_BASE_LINK + 'UserCartView', formdata).then((response) => {
            console.log(response?.data)
            setCartDataApi(response?.data)
        })
    }, [])


    return (
        <div className="poppins pt-5">
            <div className="w-full">


                <div className="min-h-[80vh] relative">
                    <h1 className="w-[85%] mx-auto text-3xl font-bold mb-10 md:mb-20 md:mt-20 text-center md:text-start">
                        My cart
                    </h1>

                    {/* Cart Items for mobile*/}
                    <div className="w-[85%] mx-auto min-h-[40vh] pb-40 md:hidden">
                        <h1 className="text-[16px] text-[#5B5B5B]">Items</h1>

                        <div className="">
                            {cartData?.cartItems?.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <div className="border-b py-5">
                                            <div className="flex flex-col gap-2 items-start justify-between relative  ">
                                                <div className="flex justify-between items-start w-full">
                                                    <div className="flex gap-5">
                                                        <div className="bg-[#e9e8e8] w-[40px] aspect-square"></div>
                                                        <h1 className="text-[12px]">{data?.name}</h1>
                                                    </div>

                                                    <img src={cross} alt="..." className="cursor-pointer w-[20px]" />
                                                </div>

                                                <div className=" w-full flex justify-between items-center gap-10">
                                                    <div className="flex items-center gap-5">
                                                        <span
                                                            className="text-base cursor-pointer"
                                                            onClick={() => { }}
                                                        >
                                                            -
                                                        </span>
                                                        <span className="text-[14px]">{data?.quantity}</span>
                                                        <span className="text-base cursor-pointer">+</span>
                                                    </div>

                                                    <h1 className="text-[16px] font-bold">
                                                        ₹ <span>{data?.price}</span>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Cart Items for PC view */}
                    <div className="w-[85%] mx-auto hidden md:flex gap-20 xl:gap-0 flex-col xl:flex-row pb-4">
                        <div className="w-full">

                            {/* table headers */}
                            <div className="grid grid-cols-[50%_12.5%_12.5%_12.5%_12.5%] ">
                                <div className=" text-[#6D6D6D]">Item</div>
                                <div className="text-center text-[#6D6D6D]">Unit Price</div>
                                <div className="text-center text-[#6D6D6D]">Quantity</div>
                                <div className="text-center text-[#6D6D6D]">Final Price</div>
                                <div className="text-center text-[#6D6D6D]">Remove</div>
                            </div>

                            {/* table content */}
                            <div className=" max-h-[40vh]  overflow-y-scroll mt-2">
                                {cartDataApi?.cartItems?.map((data, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="grid grid-cols-[50%_12.5%_12.5%_12.5%_12.5%]  my-5"
                                        >
                                            <div className="flex items-center gap-5 ">
                                                <span className="bg-[#e9e8e8] w-[40px] h-[40px] inline-block"></span>
                                                <span>{data?.name}</span>
                                            </div>
                                            <div className="text-center">{data?.unit_price}</div>
                                            <div className="text-center flex justify-center items-start gap-4 ">
                                                <span className="cursor-pointer">-</span>
                                                <span> {data?.quantity}</span>

                                                <span className="cursor-pointer">+</span>
                                            </div>
                                            <div className="flex item-start justify-center  ">
                                                <div className=" min-w-[60px]">
                                                    <span>Rs.</span>
                                                    <span className=""> {data?.price}</span>
                                                </div>
                                            </div>
                                            <div className="">
                                                <img
                                                    src={cross}
                                                    alt="..."
                                                    className="cursor-pointer mx-auto w-[18px]"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                        <div className="w-[60%] mx-auto xl:w-[30%] flex flex-col justify-between xl:px-12">
                            <h1 className="text-center">Cart</h1>
                            <div className="">
                                <div className="w-full flex justify-between items-end my-4">
                                    <h1 className="text-[14px]">Sub Total:</h1>
                                    <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.subtotal}</h1>
                                </div>
                                <div className="w-full flex justify-between items-center my-4">
                                    <h1 className="text-[14px]">Shipping:</h1>
                                    <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.shipping}</h1>
                                </div>
                                <div className="w-full flex justify-between items-center my-4">
                                    <h1 className="text-[14px]">Tax:</h1>
                                    <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.tax}</h1>
                                </div>
                                <div className="w-full flex justify-between items-center my-4">
                                    <h1 className="text-[14px]">Total:</h1>
                                    <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.total}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkout */}
                    <div className="sticky md:static bottom-0 right-0 left-0 md:mt-[60px] md:pr-[170px] py-4 md:py-8 bg-[color:var(--primary-color)] md:bg-white">
                        <div className="w-[85%] mx-auto md:w-full md:mx-0">
                            <div className="w-full relative mb-4">
                                <div className="flex md:hidden justify-center gap-2 items-center z-[100]" onClick={() => setPriceBreakdown(!priceBreakdown)}>
                                    <h1 className="text-[12px] ">Price Breakup</h1>
                                    <div>
                                        <img src={down} className={`w-[14px] transition-all duration-300 ${priceBreakdown ? '' : 'rotate-180'}`} alt="" />
                                    </div>
                                </div>
                                <div className={`absolute bottom-[20px] transition-all duration-300 overflow-hidden rounded-t-[10px] z-[110] ${priceBreakdown ? 'h-[190px] ease-in' : 'h-0 p-0 ease-out'} bg-white w-full`}>
                                    <div className="w-full px-8 pt-2 flex flex-col justify-between xl:px-12">
                                        <div className="">
                                            <div className="w-full flex justify-between items-end my-4">
                                                <h1 className="text-[14px]">Sub Total:</h1>
                                                <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.subtotal}</h1>
                                            </div>
                                            <div className="w-full flex justify-between items-center my-4">
                                                <h1 className="text-[14px]">Shipping:</h1>
                                                <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.shipping}</h1>
                                            </div>
                                            <div className="w-full flex justify-between items-center my-4">
                                                <h1 className="text-[14px]">Tax:</h1>
                                                <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.tax}</h1>
                                            </div>
                                            <div className="w-full flex justify-between items-center my-4">
                                                <h1 className="text-[14px]">Total:</h1>
                                                <h1 className="text-[16px] font-[500]">₹ {cartData?.cart_total?.total}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className={`fixed bg-black inset-0 opacity-20 ${priceBreakdown ? 'block' : 'hidden'}`} onClick={() => setPriceBreakdown(false)}>

                                    </div>
                            </div>
                            <div className="flex flex-col md:gap-5   justify-between  items-center md:items-end w-full">
                                <div className="flex justify-center items-center gap-3">
                                    <h2 className="text-black  text-[17px]">Final Price :</h2>
                                    <h1 className="text-black font-extrabold text-[21px] ">
                                        ₹ <span>{cartData?.cart_total?.final_price}</span>
                                    </h1>
                                </div>

                                <div>
                                    <Link to='/checkout' className="bg-[#FCF55C] active:scale-[0.96] cursor-pointer active:bg-[#ddd650] px-5 py-2 md:p-4 md:px-10 font-[600]  text-[18px] ">
                                        CHECKOUT
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
            {/* <div className="hidden md:block">
        <Footer />
      </div> */}
        </div>
    );
};

export default CartPage;
