import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import allProducts from '../../mockApi/allProductsView'
import banner from  '../../assets/images/banner1.png'
import banner2 from  '../../assets/images/banner2.png'
import axios from 'axios'
import { VITE_BASE_LINK } from '../../../baseLink'
import { useRecoilState } from 'recoil'

const AllProductsView = () => {

    const [allproductsApiData, setAllproductsApiData] = useState()

    useEffect(() => {
      axios.get(VITE_BASE_LINK + 'all_product_view').then((response) => {
        console.log(response?.data)
        setAllproductsApiData(response?.data)
      })
    }, [])


    return (
        <div className='w-full mb-5'>
            <div className='w-full py-10'>
                <h1 className='text-[28px] poppins font-[500] text-center'>All Products</h1>
            </div>

            {/* banner */}
            <div className='w-full flex justify-center items-center bg-[color:var(--primary-color)] mb-4'>
                <img src={banner2} className='' alt="" />
                <img src={banner} className='' alt="" />
            </div>

            <div className='w-full flex gap-4 pt-10'>

                {/* filters */}
                <div className='w-[20%] bg- px-2 pt-4 poppins'>
                    <div className='w-full sticky top-[150px]'>
                        <h1 className='text-[17px] pb-4'>Filters</h1>
                        {
                            allProducts?.filters?.map((data, i) => (
                                <div key={i} className='w-full py-3 flex justify-between items-center border-b'>
                                    <label className='text-[13px]' htmlFor={data?.title}>{data?.title}</label>
                                    <input type="checkbox" name={data?.title} className='w-[10px]' />
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* products */}
                <div className='w-full grid grid-cols-4 gap-8 mt-10'>
                    {
                        allproductsApiData?.map((data, i) => (
                            <Link key={i} to={`/single-product/` + data?.id} className='w-full flex flex-col items-center shadow-md bg-[#fcfcfc]'>
                                <div className='w-full flex justify-center items-center'>
                                    <img src={VITE_BASE_LINK + data?.image} className='w-[400px]' alt="" />
                                </div>
                                <div className='w-full flex justify-between items-start px-2 pb-2'>
                                    <div className='text-[16px] poppins font-[500]'>
                                        {data?.title}
                                    </div>
                                    <div className='poppins flex flex-col justify-end items-center gap-1'>
                                        <div className='text-[14px] bg-[#ECECEC] px-[4px]'>{data?.weight}m</div>
                                        <div className='text-[16px] font-[500]'>Rs {data?.price}</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AllProductsView