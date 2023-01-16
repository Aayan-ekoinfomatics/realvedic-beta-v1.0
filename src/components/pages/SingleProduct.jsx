import React, { useState } from 'react'
import back from '../../assets/icons/back_button.svg'
import fb from '../../assets/icons/facebook.svg'
import gmail from '../../assets/icons/gmail.svg'
import twitter from '../../assets/icons/twitter.svg'
import product_data from '../../mockApi/singleProductApi'
import down from '../../assets/icons/down_arrow.svg'

const SingleProduct = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);


    return (
        <div className='w-full'>

            {/* header */}
            <div className='w-full flex justify-between items-center px-16 mt-[80px] mb-10'>
                <div className='w-full max-w-[20px]'>
                    <img src={back} className='w-[15px] cursor-pointer' alt="" />
                </div>
                <div className='w-full max-w-[170px] flex justify-between items-center'>
                    <div className='w-full'>
                        <h1 className='poppins text-[16px]'>Share on</h1>
                    </div>
                    <div className='w-full flex justify-center gap-2 items-center'>
                        <span>
                            <img src={fb} className='w-[18px]' alt="" />
                        </span>
                        <span>
                            <img src={gmail} className='w-[18px]' alt="" />
                        </span>
                        <span>
                            <img src={twitter} className='w-[18px]' alt="" />
                        </span>
                    </div>
                </div>
            </div>

            {/* product */}
            <div className='w-full flex px-16'>

                {/* product images */}
                <div className='w-[60%] flex justify-end'>

                    {/* vertical images */}
                    <div className='w-[20%] flex flex-col justify-evenly items-end'>
                        {
                            product_data?.product_details?.images?.map((data, i) => (
                                <div className='w-fit max-w-[160px] flex justify-end' key={i}>
                                    <img src={data} className='w-full max-w-[120px]' alt="" />
                                </div>
                            ))
                        }
                    </div>

                    {/* single image */}
                    <div className='w-[80%] flex justify-center items-center'>
                        <img src={product_data?.product_details?.single_image} className='w-full max-w-[560px]' alt="" />
                    </div>
                </div>

                {/* product description */}
                <div className='w-[40%] flex justify-center items-center pr-20'>
                    <div className='w-full max-w-[620px]'>
                        <h1 className='poppins text-[30px] py-2 font-[600]'>{product_data?.product_details?.title}</h1>
                        <div className='w-full py-2 mt-2'>
                            <p className='poppins text-[17px]'>{product_data?.product_details?.description}</p>
                        </div>
                        <div className='w-full'>
                            <div className='w-full mt-4'>
                                <p className='text-[25px] font-[500] line-through'>₹ {product_data?.product_details?.original_price}</p>
                            </div>
                            <div className='w-full flex justify-between'>
                                <div className='w-full flex gap-3'>
                                    <p className='text-[25px] font-[500] popins opacity-60'>Offer Price :-</p>
                                    <p className='text-[25px] font-[500] popins'>₹ {product_data?.product_details?.offer_price}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex py-2 mt-4'>
                            <div className='w-fit px-4 text-[20px] poppins flex justify-center items-center border'>-</div>
                            <div className='w-full text-[23px] py-[10px] font-[500] bg-[color:var(--primary-color)] flex justify-center items-center'>ADD TO CART</div>
                            <div className='w-fit px-4 text-[20px] poppins flex justify-center items-center border'>+</div>
                        </div>
                        <div className='w-full mt-6 relative'>
                            <p className='text-[20px] font-[500] pb-3'>Pack Sizes</p>
                            <div className='w-full flex justify-between pb-4'>
                                {/* <div className='w-full bg-[color:var(--primary-color)] py-2'>
                                    100gm
                                </div>
                                <div className='w-fit bg-[#C57963] flex justify-center items-center  py-2 px-2'>
                                    <img src={down} className='w-[22px]' alt="" />
                                </div> */}
                                <div className='w-fit font-[500] py-[10px] text-[15px] poppins flex justify-center items-center bg-[color:var(--primary-color)] pl-2'>100gm</div>
                                <div className='w-full text-[23px] py-[10px] font-[500] bg-[color:var(--primary-color)] flex justify-center items-center'>Rs 125</div>
                                <div className='w-fit px-4 text-[30px] poppins flex justify-center items-center bg-[#C57963] cursor-pointer' onClick={() => setDropdownOpen(!dropdownOpen)}>
                                    <img src={down} className='w-[22px]' alt="" />
                                </div>
                            </div>
                            <div className={`w-full mx-auto absolute top-0 mt-[98px] shadow-md px-4 bg-[color:var(--primary-color)] opacity-70 transition-all duration-300 ${dropdownOpen ? 'h-[200px] overflow-y-scroll ease-in py-2' : 'h-0 ease-out overflow-hidden p-0'}`}>
                                {
                                    product_data?.product_details?.pack_sizes?.map((data, i) => (
                                        <div key={i} className='w-full flex justify-between py-3 border-b'>
                                            <div className='w-fit text-[16px] poppins'>
                                                {data?.weight}gm
                                            </div>
                                            <div className='w-fit text-[16px] poppins'>
                                                Rs {data?.price}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct