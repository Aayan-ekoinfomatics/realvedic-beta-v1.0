import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import bannerData from '../../mockApi/landingPageBanner'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom'
import { VITE_BASE_LINK } from '../../../baseLink'

const LandingPageBanners = () => {

  const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

  // useEffect(() => {
  //   console.log(landingApiData)
  // }, [landingApiData])
  

  return (
    <div className='w-full flex flex-col md:flex-row gap-4 md:gap-8 justify-between'>
        {
            landingApiData?.dual_banners?.map((data, i) => (
                <div key={i} className='w-full'>
                    <img src={VITE_BASE_LINK + data?.image} className='w-full' alt="" />
                </div>
            ))
        }
    </div>
  )
}

export default LandingPageBanners