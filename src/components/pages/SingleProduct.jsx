import React, { useEffect, useState } from 'react'
import back from '../../assets/icons/back_button.svg'
import fb from '../../assets/icons/facebook.svg'
import gmail from '../../assets/icons/gmail.svg'
import twitter from '../../assets/icons/twitter.svg'
import product_data from '../../mockApi/singleProductApi'
import down from '../../assets/icons/down_arrow.svg'
import Slider from 'react-slick'
import leaf from '../../assets/icons/leaf.svg'
import molecules from '../../assets/icons/molecules.svg'
import fire from '../../assets/icons/fire.svg'
import RecentlyViewd from '../individual-components/RecentlyViewd'

const SingleProduct = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);


    const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const [packSizeSelect, setPackSizeSelect] = useState(product_data?.product_details?.pack_sizes[selectedWeightIndex])

    let sliderSettings = {
        dots: true,
        dotsClass: "slick-dots",
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    // useEffect(() => {
    //       setPackSizeSelect({
    //         weight: product_data?.product_details?.pack_sizes[0],
    //         price: product_data?.product_details?.pack_sizes[0],
    //       })
    // }, [packSizeSelect])


    return (
        <div className='w-full mb-4'>

            {/* header */}
            <div className=' w-full flex justify-between items-center px-4 xl:px-16 mt-10 md:mt-[150px] xl:mt-[190px] mb-10'>
                <div className='w-full max-w-[20px]'>
                    <img src={back} className='w-[10px] md:w-[13px] xl:w-[15px] cursor-pointer' alt="" />
                </div>
                <div className='w-fit md:w-full max-w-[170px] flex justify-between gap-2 items-center'>
                    <div className='w-full'>
                        <h1 className='poppins text-[12px] md:text-[14px] xl:text-[16px]'>Share on</h1>
                    </div>
                    <div className='w-full flex justify-center gap-2 items-center'>
                        <span>
                            <img src={fb} className='w-[14px] md:w-[16px] xl:w-[18px]' alt="" />
                        </span>
                        <span>
                            <img src={gmail} className='w-[14px] md:w-[16px] xl:w-[18px]' alt="" />
                        </span>
                        <span>
                            <img src={twitter} className='w-[14px] md:w-[16px] xl:w-[18px]' alt="" />
                        </span>
                    </div>
                </div>
            </div>

            {/* product details desktop */}
            <div className='hidden w-full md:flex px-5 xl:px-16 pb-10'>

                {/* product images */}
                <div className='w-[60%] flex justify-end'>

                    {/* vertical images */}
                    <div className='w-[20%] flex flex-col justify-center xl:justify-evenly items-end'>
                        {
                            product_data?.product_details?.images?.map((data, i) => {
                                return (
                                    <div className={`w-fit max-w-[100px] xl:max-w-[160px] flex justify-end cursor-pointer ${i === selectedImageIndex ? 'bg-black p-[2px]' : 'p-[2px]'}`} key={i} onClick={() => setSelectedImageIndex(i)}>
                                        <img src={data} className='w-full max-w-[80px] xl:max-w-[120px]' alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* single image */}
                    <div className='w-[80%] flex justify-center items-center'>
                        <img src={product_data?.product_details?.images[selectedImageIndex]} className='w-full max-w-[400px] xl:max-w-[600px]' alt="" />
                    </div>
                </div>

                {/* product description */}
                <div className='w-[40%] flex justify-center items-center xl:pr-20'>
                    <div className='w-full max-w-[620px]'>
                        <h1 className='poppins text-[30px] py-2 font-[600]'>{product_data?.product_details?.title}</h1>
                        <div className='w-full py-2 mt-2'>
                            <p className='poppins text-[17px]'>{product_data?.product_details?.description}</p>
                        </div>
                        <div className='w-full'>
                            <div className='w-full mt-4'>
                                <p className='text-[25px] font-[500] line-through'>₹ {packSizeSelect?.price}</p>
                            </div>
                            <div className='w-full flex justify-between'>
                                <div className='w-full flex gap-3'>
                                    <p className='text-[25px] font-[500] popins opacity-60'>Offer Price :-</p>
                                    <p className='text-[25px] font-[500] popins'>₹ {packSizeSelect?.offer_price}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex py-2 mt-4'>
                            <div className='w-fit px-4 text-[20px] poppins flex justify-center items-center border'>-</div>
                            <div className='w-full text-[23px] py-[10px] font-[500] bg-[color:var(--primary-color)] flex justify-center items-center'>ADD TO CART</div>
                            <div className='w-fit px-4 text-[20px] poppins flex justify-center items-center border'>+</div>
                        </div>

                        {/* pack sizes */}

                        <div className='w-full mt-6 relative'>
                            <p className='text-[20px] font-[500] pb-3'>Pack Sizes</p>
                            <div className='w-full flex justify-between pb-4'>
                                <div className='w-fit font-[500] py-[10px] text-[15px] poppins flex justify-center items-center bg-[color:var(--primary-color)] pl-2'>{packSizeSelect?.weight}{packSizeSelect?.weight === '1' ? <span>kg</span> : <span>gm</span>}</div>
                                <div className='w-full text-[23px] py-[10px] font-[500] bg-[color:var(--primary-color)] flex justify-center items-center'>Rs {packSizeSelect?.price}</div>
                                <div className='w-fit px-4 text-[30px] poppins flex justify-center items-center bg-[#C57963] cursor-pointer' onClick={() => setDropdownOpen(!dropdownOpen)}>
                                    <img src={down} className='w-[22px]' alt="" />
                                </div>
                            </div>

                            {/* dropdown */}
                            <div className={`w-full mx-auto absolute top-0 mt-[98px] shadow-md bg-[color:var(--primary-color)] opacity-70 transition-all duration-300 z-[500] ${dropdownOpen ? 'h-[200px] overflow-y-scroll ease-in py-2' : 'h-0 ease-out overflow-hidden p-0'}`}>
                                {
                                    product_data?.product_details?.pack_sizes?.map((data, i) => (
                                        <div key={i} className='w-full flex justify-between py-3 border-b cursor-pointer active:scale-[0.99] active:bg-[#C57963] px-4' onClick={() => {
                                            setPackSizeSelect(data)
                                            setDropdownOpen(false)
                                        }}>
                                            <div className='w-fit text-[16px] poppins'>
                                                {data?.weight}{data?.weight === '1' ? <span>kg</span> : <span>gm</span>}
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

            {/* product details mobile */}
            <div className='block md:hidden w-full px-4 '>

                {/* slider */}
                <div className='w-full'>
                    < Slider
                        className="w-full overflow-hidden"
                        dotsClass="slick-dots"
                        {...sliderSettings}
                    >
                        {product_data?.product_details?.images?.map((data, i) => (
                            <div key={i} className=" max-w-[100%] h-[100%]">
                                <img
                                    src={data}
                                    alt=""
                                    className="object-contain w-[95%] mx-auto"
                                />
                            </div>
                        ))}
                    </ Slider>
                </div>

                {/* title & description */}
                <div className='w-full mt-4'>
                    <h1 className='poppins text-[20px] font-[700]'>{product_data?.product_details?.title}</h1>
                    <div className='w-full mt-2'>
                        <p className='poppins text-[14px] '>{product_data?.product_details?.description}</p>
                    </div>
                </div>

                {/* prices */}
                <div className='w-full mt-4'>
                    <div className='w-full'>
                        <p className='text-[23px] font-[500] line-through'>₹ {packSizeSelect?.price}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-full flex gap-3'>
                            <p className='text-[23px] font-[500] popins opacity-60'>Offer Price :-</p>
                            <p className='text-[23px] font-[500] popins'>₹ {packSizeSelect?.offer_price}</p>
                        </div>
                    </div>
                </div>

                {/* add to cart button */}
                <div className='w-full flex py-2'>
                    <div className='w-fit px-4 text-[20px] poppins flex justify-center items-center border'>-</div>
                    <div className='w-full text-[16px] py-[10px] font-[500] bg-[color:var(--primary-color)] flex justify-center items-center'>ADD TO CART</div>
                    <div className='w-fit px-4 text-[20px] poppins flex justify-center items-center border'>+</div>
                </div>

                {/* pack sizes */}
                <div className='w-full mt-4 relative mb-2'>
                    <p className='text-[20px] font-[500] pb-3'>Pack Sizes</p>
                    <div className='w-full flex justify-between pb-4'>
                        <div className='w-fit font-[500] py-[10px] text-[13px] poppins flex justify-center items-center bg-[color:var(--primary-color)] pl-2'>{packSizeSelect?.weight}{packSizeSelect?.weight === '1' ? <span>kg</span> : <span>gm</span>}</div>
                        <div className='w-full text-[18px] py-[10px] font-[500] bg-[color:var(--primary-color)] flex justify-center items-center'>Rs {packSizeSelect?.price}</div>
                        <div className='w-fit px-4 text-[30px] poppins flex justify-center items-center bg-[#C57963] cursor-pointer' onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <img src={down} className='w-[22px]' alt="" />
                        </div>
                    </div>

                    {/* dropdown */}
                    <div className={`w-full mx-auto absolute top-0 mt-[98px] shadow-md bg-[#ffe2d7] transition-all duration-300 z-[500] ${dropdownOpen ? 'h-[200px] overflow-y-scroll ease-in py-2' : 'h-0 ease-out overflow-hidden p-0'}`}>
                        {
                            product_data?.product_details?.pack_sizes?.map((data, i) => (
                                <div key={i} className='w-full flex justify-between py-3 border-b cursor-pointer active:scale-[0.99] active:bg-[#C57963] px-4' onClick={() => {
                                    setPackSizeSelect(data)
                                    setDropdownOpen(false)
                                }}>
                                    <div className='w-fit text-[16px] poppins'>
                                        {data?.weight}{data?.weight === '1' ? <span>kg</span> : <span>gm</span>}
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


            {/* extra details */}
            <div className='w-full px-4 xl:px-20 z-[200]'>

                {/* icons */}
                <div className=' w-full max-w-[160px] xl:max-w-[200px] flex justify-between items-center'>
                    <div className='w-fit'>
                        <img src={fire} className='w-[45px] xl:w-[55px]' alt="" />
                    </div>
                    <div className='w-fit'>
                        <img src={molecules} className='w-[45px] xl:w-[55px]' alt="" />
                    </div>
                    <div className='w-fit'>
                        <img src={leaf} className='w-[45px] xl:w-[55px]' alt="" />
                    </div>
                </div>

                {/* benifits */}
                <div className='w-full mt-10'>
                    <h1 className='text-[15px] xl:text-[20px] font-[600] poppins'>{product_data?.benifits?.title}</h1>
                    <div className='w-full mt-1'>
                        <p className='text-[13px] xl:text-[14px] poppins'>{product_data?.benifits?.description}</p>
                    </div>
                </div>

                {/* ingredients */}
                <div className='w-full mt-8'>
                    <h1 className='text-[15px] xl:text-[20px] font-[600] poppins'>{product_data?.Ingredients?.title}</h1>
                    <div className='w-full mt-1'>
                        <p className='text-[13px] xl:text-[14px] poppins'>{product_data?.Ingredients?.description}</p>
                    </div>
                </div>

                {/* how we use it */}
                <div className='w-full mt-8'>
                    <h1 className='text-[15px] xl:text-[20px] font-[600] poppins'>{product_data?.how_to_use?.title}</h1>
                    <div className='w-full mt-1'>
                        <p className='text-[13px] xl:text-[14px] poppins'>{product_data?.how_to_use?.description}</p>
                    </div>
                </div>

                {/* how we make it */}
                <div className='w-full mt-8'>
                    <h1 className='text-[15px] xl:text-[20px] font-[600] poppins'>{product_data?.how_we_make_it?.title}</h1>
                    <div className='w-full mt-1'>
                        <p className='text-[13px] xl:text-[14px] poppins'>{product_data?.how_we_make_it?.description}</p>
                    </div>
                </div>

                {/* nutrition chart */}

                <div className='w-full mt-8 mb-6'>
                    <h1 className='text-[15px] xl:text-[20px] font-[600] poppins py-2'>{product_data?.nutrition?.title}</h1>
                    <div className='w-full border-r border-t border-l max-w-[400px]'>
                        <div className='w-full border-b'>
                            <h1 className='text-[13px] pl-2 font-[600] poppins py-2 text-[#4e4e4e]'>{product_data?.nutrition?.title}</h1>
                        </div>
                        {
                            product_data?.nutrition?.values?.map((data, i) => (
                                <div key={i} className='flex justify-between px-3 border-b text-[#4e4e4e]'>
                                    <div className='w-full flex justify-start items-center border-r text-[13px] poppins font-[500] py-2'>
                                        {data?.title}
                                    </div>
                                    <div className='w-full flex justify-end items-center border-l text-[13px] poppins font-[500] py-2'>
                                        {data?.value}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* recently viewed */}
            <RecentlyViewd />
        </div>
    )
}

export default SingleProduct

