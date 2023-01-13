import React from 'react'
import tabData from '../../mockApi/categoryTabs'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryTabs = () => {

    let settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };


  return (
    <>
    <div className='flex w-full h-full items-center justify-between gap-5 px-2 md:px-4 py-3 md:py-6 overflow-x-scroll scrollbar-hide'>
        {
            tabData?.tab?.map((data, i) => (
                <div key={i} className={`w-full flex items-center min-w-[130px] md:min-w-[222px] rounded-[13px] pl-3 pr-1 py-1 justify-between`} style={{backgroundColor: data?.color}}>
                    <div className='w-full max-w-[100px]'>
                        <h1 className='helvetica text-[12px] md:text-[15px] font-[500] poppins'>{data?.title}</h1>
                    </div>
                    <div className='w-fit'>
                        <img src={data?.image} className='' alt="" />
                    </div>
                </div>
            ))
        }
    </div>

    {/* mobile view */}
    {/* <div className='w-full block md:hidden px-2 py-4'>
            {
                tabData?.tab?.map((data, i) => (
                    <div key={i} className={`w-full grid grid-cols-2 max-w-[700px] rounded-[13px] py-1 border border-blue-500`} style={{backgroundColor: data?.color}}>
                        <div className=' border border-green-500'>
                            <h1 className='helvetica text-[15px] font-[500] poppins'>{data?.title}</h1>
                        </div>
                        <div className=' border border-green-500'>
                            <img src={data?.image} className='' alt="" />
                        </div>
                    </div>
                ))
            }
    </div> */}
    </>
  )
}

export default CategoryTabs