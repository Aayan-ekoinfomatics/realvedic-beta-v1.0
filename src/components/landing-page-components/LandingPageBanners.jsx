import React from 'react'
import bannerData from '../../mockApi/landingPageBanner'

const LandingPageBanners = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-4 md:gap-8 justify-between'>
        {
            bannerData?.banners?.map((data, i) => (
                <div key={i} className='w-full'>
                    <img src={data?.image} className='w-full' alt="" />
                </div>
            ))
        }
    </div>
  )
}

export default LandingPageBanners