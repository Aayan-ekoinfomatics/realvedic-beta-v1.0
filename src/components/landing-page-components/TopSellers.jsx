import React from 'react'
import top_seller from '../../mockApi/topSellerSection'

const TopSellers = () => {
  return (

    <>
      <div className='w-full flex justify-center items-center'>
        <h1 className='px-8 py-2 bg-[color:var(--primary-color)] rounded-[20px] poppins text-[19px] font-[500] my-8'>Top Sellers</h1>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 md:gap-8 px-10 mb-10'>
        {
          top_seller?.products?.map((data, i) => {
            return (
              <div key={i} className='w-full '>
                <div>
                  <div className='w-full bg-[#FCEDD1] flex justify-center items-center'>
                    <img src={data?.image} className='w-full max-w-[250px]' alt="" />
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <div className='w-full max-w-[140px] poppins text-[15px] font-[400]'><p>{data?.title}</p></div>
                    <div className='w-full flex flex-col gap-1 items-end'>
                      <div className='poppins text-[14px]'>{data?.weight}gm</div>
                      <div className='poppins text-[16px]'>Rs {data?.price}</div>
                    </div>
                  </div>
                  <div className='w-full flex flex-col justify-end items-end'>
                    <div className=''>
                      <button className='px-5 py-2 bg-[#FCF55C] text-[14px] font-[500]' >ADD TO CART</button>
                    </div>
                    <div className='mt-1'>
                      <h1 className='text-[12px] underline'>View More</h1>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default TopSellers