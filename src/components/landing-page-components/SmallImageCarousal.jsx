import React from 'react'
import Slider from "react-slick";
import LandingPageBanners from './LandingPageBanners'
import landingPageSmallCarousal from '../../mockApi/landingPageSmallCarousal'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={` ${className} w-fit z-[800]`} onClick={onClick}>
            {/* <img src={leftArrow} alt="previous" className=" w-[40px] md:w-[100px] lg:-translate-x-6" /> */}
            <p>prev</p>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} w-fit`} onClick={onClick}>
            {/* <img src={rightArrow} alt="next" className=" w-[40px] md:w-[100px] lg:translate-x-7" /> */}
            <p>next</p>
        </div>
    );
};

const SmallImageCarousal = () => {

    let settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    let mobileSettings = {
        // dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };


    return (
        <>
        <div className='hidden md:block w-full bg-[color:var(--primary-color)] my-6 py-2'>
            <div className='flex justify-between items-center gap-4'>
                <div className='w-full max-w-[110px] flex justify-center items-center ml-2 font-[500]'>
                    <h1 className='poppins font-[600] text-[17px]'>Our Best Products</h1>
                </div>
                <Slider
                    className="w-full overflow-hidden"
                    {...settings}
                >
                    {
                        landingPageSmallCarousal?.images?.map((data, index) => (
                            <div className="w-full max-w-[150px] flex justify-center items-center outline-none cursor-pointer" key={index}>
                                <img src={data?.image} className=" w-full object-contain" />
                            </div>
                        ))
                    }
                </Slider >
            </div>
        </div >

        
        
        {/* mobile */}
        <div className='block md:hidden w-full bg-[color:var(--primary-color)] my-4 py-2'>
            <div className='flex justify-between items-center gap-2'>
                <div className='w-full max-w-[60px] flex justify-center items-center font-[500]'>
                    <h1 className='poppins font-[500] text-[12px] pl-1'>Our Best Products</h1>
                </div>
                <Slider
                    className="w-full overflow-hidden"
                    {...mobileSettings}
                >
                    {
                        landingPageSmallCarousal?.images?.map((data, index) => (
                            <div className="w-full flex justify-center items-center outline-none cursor-pointer" key={index}>
                                <img src={data?.image} className="min-w-[80px] w-full object-contain" />
                            </div>
                        ))
                    }
                </Slider >
            </div>
        </div >
        </>
    )
}

export default SmallImageCarousal

