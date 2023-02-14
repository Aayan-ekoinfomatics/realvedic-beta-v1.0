import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { VITE_BASE_LINK } from '../../../baseLink';
import top_seller from '../../mockApi/topSellerSection'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom';
import ProductCard from '../individual-components/ProductCard';

const TopSellers = (props) => {

  const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

  // useEffect(() => {
  //   console.log(landingApiData)
  // }, [landingApiData])


  return (

    <div className='mt-[20px] mb-[20px]'>
      {/* <div className='w-full flex justify-center items-center'>
        <h1 className='px-8 py-2 bg-[color:var(--primary-color)] rounded-[20px] poppins text-[19px] font-[500] my-8'>Top Sellers</h1>
      </div> */}
      <div className='w-full grid grid-cols-2 md:grid-cols-2 lg:flex gap-4 xl:gap-8 px-5 md:px-10 mb-10'>
        {
          landingApiData?.top_seller_products?.map((data, i) => {
            return (
              // <div key={i} className='w-full pt-2 px-2 pb-1'>
              //   <div>
              //     <div className='w-full bg-[#FCEDD1] flex justify-center items-center'>
              //       <img src={VITE_BASE_LINK + data?.image} className='w-full max-w-[250px]' alt="" />
              //     </div>
              //     <div className='w-full flex justify-between items-center'>
              //       <div className='w-full max-w-[140px] poppins text-[15px] font-[400]'><p>{data?.title}</p></div>
              //       <div className='w-full flex flex-col gap-1 items-end'>
              //         <div className='poppins text-[14px]'>{data?.weight}m</div>
              //         <div className='poppins text-[16px]'>₹ {data?.price}</div>
              //       </div>
              //     </div>
              //     <div className='w-full flex flex-col justify-end items-end'>
              //       <div className=''>
              //         <button className='px-5 py-2 bg-[#FCF55C] text-[14px] font-[500] active:scale-[0.96] active:bg-[#cac339]' >ADD TO CART</button>
              //       </div>
              //       <div className='mt-1'>
              //         <h1 className='text-[12px] underline '>View More</h1>
              //       </div>
              //     </div>
              //   </div>
              // </div>

              <ProductCard key={i} id={data?.id} title={data?.title} image={data?.image} weight={data?.weight} price={data?.price} status={data?.cart_status} />
            )
          })
        }
      </div>
    </div>
  )
}

export default TopSellers