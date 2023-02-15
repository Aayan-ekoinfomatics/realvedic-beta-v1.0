import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { VITE_BASE_LINK } from '../../../baseLink'
import recently_viewed from '../../mockApi/recentlyViewedProductsApi'
import cartPageAtom from '../../recoil/atoms/cartPageAtom'
import ProductCard from './ProductCard'

const RecentlyViewd = () => {

    const [itemData, setItemData] = useState();

    const [cartDataApi, setCartDataApi] = useRecoilState(cartPageAtom);

    useEffect(() => {
        axios.get(VITE_BASE_LINK + 'recently_viewed_oc?token=' + localStorage.getItem('token')).then((response) => {
            // console.log(response?.data)
            setItemData(response?.data)
        })
    }, [])

    useEffect(() => {
        axios.get(VITE_BASE_LINK + 'recently_viewed_oc?token=' + localStorage.getItem('token')).then((response) => {
            // console.log(response?.data)
            setItemData(response?.data)
        })
    }, [cartDataApi])

    useEffect(() => {
        console.log(itemData)
    }, [itemData])


  return (
    <div className='w-full mt-20 px-4 md:px-10 xl:px-16'>
        <div className='w-full py-8 text-center'>
            <h1 className='poppins text-[18px] font-[500]'>More Products</h1>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5'>
        {
            itemData?.map((data, i) => (
                // <div key={i} className='w-full border shadow-md p-2'>
                //     <div className='w-full flex justify-center items-center'>
                //         <img src={data?.image} className='w-full min-w-[300px] max-w-[300px]' alt="" />
                //     </div>
                //     <div className='w-full flex justify-between items-center mt-1'>
                //         <div className='w-[60%]'>
                //             <h1 className='poppins text-[15px] font-[600]'>{data?.title}</h1>
                //         </div>
                //         <div className='w-fit p-1 px-[6px] flex justify-end items-center bg-[#ECECEC]'>
                //             <h1 className='poppins text-[13px] font-[600]'>{data?.weight}gm</h1>
                //         </div>
                //     </div>
                //     <div className='w-full flex justify-end mt-1'>
                //         <div className='w-fiy'>
                //             <h1 className='poppins text-[14px] font-[400]'>Rs {data?.price}</h1>
                //         </div>
                //     </div>
                //     <div className='w-full flex justify-end items-center mt-1'>
                //         <button className='bg-[#FCF55C] active:bg-[#f5ec4b] px-8 py-2 poppins text-[15px] font-[500] cursor-pointer active:scale-[0.98]'>ADD TO CART</button>
                //     </div>
                // </div>
                <ProductCard key={i} id={data?.id} title={data?.title} image={data?.image} weight={data?.weight} price={data?.price} status={data?.cart_status} />
            ))
        }
        </div>
    </div>
  )
}

export default RecentlyViewd