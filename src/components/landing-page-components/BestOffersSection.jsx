import React from 'react'
import bestOfferSection from '../../mockApi/bestOffersSection'

const BestOffersSection = () => {
    return (
        <div className='grid grid-cols-3 gap-8 px-10 mb-10'>
            <div className='w-full col-start-1 col-end-2 bg-[color:var(--primary-color)] rounded-[15px] pt-4'>
                <h1 className='poppins text-center py-3 text-[25px] font-[500]'>{bestOfferSection?.soup?.title}</h1>
                <div className='w-full my-5 mt-10'>
                    <img src={bestOfferSection?.soup?.image} alt="" />
                </div>
                <h1 className='poppins text-[25px] font-[500] text-center py-2 mt-10'>{bestOfferSection?.soup?.offer}</h1>
                <h1 className='poppins text-[16px] text-center py-2'>{bestOfferSection?.soup?.item}</h1>
            </div>
            <div className='w-full grid grid-cols-2 gap-8 col-start-2 col-end-4'>
                <div className='w-full flex justify-between rounded-[15px] bg-[color:var(--primary-color)]'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='text-[30px] poppins'>{bestOfferSection?.beverages?.offer}</h1>
                        <h1 className='text-[16px] poppins'>{bestOfferSection?.beverages?.item}</h1>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <img src={bestOfferSection?.beverages?.image} className='w-[400px]' alt="" />
                    </div>
                </div>
                <div className='w-full flex justify-between rounded-[15px] bg-[color:var(--primary-color)]'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='text-[30px] poppins'>{bestOfferSection?.beverages?.offer}</h1>
                        <h1 className='text-[16px] poppins'>{bestOfferSection?.beverages?.item}</h1>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <img src={bestOfferSection?.beverages?.image} className='w-[400px]' alt="" />
                    </div>
                </div>
                <div className='w-full rounded-[15px] bg-[color:var(--primary-color)]'>
                    <div className='w-full flex justify-between rounded-[15px] bg-[color:var(--primary-color)]'>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <h1 className='text-[30px] poppins'>{bestOfferSection?.beverages?.offer}</h1>
                            <h1 className='text-[16px] poppins'>{bestOfferSection?.beverages?.item}</h1>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <img src={bestOfferSection?.beverages?.image} className='w-[400px]' alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between rounded-[15px] bg-[color:var(--primary-color)]'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='text-[30px] poppins'>{bestOfferSection?.beverages?.offer}</h1>
                        <h1 className='text-[16px] poppins'>{bestOfferSection?.beverages?.item}</h1>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <img src={bestOfferSection?.beverages?.image} className='w-[400px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestOffersSection