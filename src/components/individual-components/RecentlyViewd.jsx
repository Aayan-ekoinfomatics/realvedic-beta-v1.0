import React from 'react'
import recently_viewed from '../../mockApi/recentlyViewedProductsApi'

const RecentlyViewd = () => {
  return (
    <div className='w-full mt-20 px-4 md:px-10 xl:px-16'>
        <div className='w-full py-8 text-center'>
            <h1 className='poppins text-[18px] font-[500]'>Recently Viewed</h1>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5'>
        {
            recently_viewed?.products?.map((data, i) => (
                <div key={i} className='w-full border shadow-md p-2'>
                    <div className='w-full flex justify-center items-center'>
                        <img src={data?.image} className='w-full min-w-[300px] max-w-[300px]' alt="" />
                    </div>
                    <div className='w-full flex justify-between items-center mt-1'>
                        <div className='w-[60%]'>
                            <h1 className='poppins text-[15px] font-[600]'>{data?.title}</h1>
                        </div>
                        <div className='w-fit p-1 px-[6px] flex justify-end items-center bg-[#ECECEC]'>
                            <h1 className='poppins text-[13px] font-[600]'>{data?.weight}gm</h1>
                        </div>
                    </div>
                    <div className='w-full flex justify-end mt-1'>
                        <div className='w-fiy'>
                            <h1 className='poppins text-[14px] font-[400]'>Rs {data?.price}</h1>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-center mt-1'>
                        <butto className='bg-[#FCF55C] active:bg-[#f5ec4b] px-8 py-2 poppins text-[15px] font-[500] cursor-pointer active:scale-[0.98]'>ADD TO CART</butto>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default RecentlyViewd