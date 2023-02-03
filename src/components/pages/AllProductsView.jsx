import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import allProducts from '../../mockApi/allProductsView'
import banner from '../../assets/images/category-image.jpg'
// import banner2 from  '../../assets/images/banner2.png'
import axios from 'axios'
import { VITE_BASE_LINK } from '../../../baseLink'
import { useRecoilState } from 'recoil'
import ProductCard from '../individual-components/ProductCard'
import search from '../../assets/icons/search.svg'
import RecentlyViewd from '../individual-components/RecentlyViewd'

const AllProductsView = () => {

    const [allproductsApiData, setAllproductsApiData] = useState();

    const [searchData, setSearchData] = useState('');

    const params = useParams();

    useEffect(() => {

        axios.get(VITE_BASE_LINK + 'categoryPage?category='+ params?.category_id ).then((response) => { 
            // console.log(response?.data)
            setAllproductsApiData(response?.data)
        })
    }, [params])

    useEffect(() => {
        console.log(params)
    }, [allproductsApiData])



    return (
        <div className='w-full mb-5'>

            {/* banner */}
            <div className='w-full flex justify-center items-center relative bg-[color:var(--primary-color)] mb-4'>
                <img src={banner} className='' alt="" />
                <h1 className='text-[20px] md:text-[40px] xl:text-[55px] poppins absolute bottom-[30%] md:bottom-[80px] left-[5%] md:left-[40px] font-[600]'>{allproductsApiData?.category}</h1>
            </div>

            <div className='w-full flex justify-between items-center px-4 lg:px-8'>
                <div className='border border-[#696969b6] rounded-[15px] bg-white flex px-2 py-2 w-full max-w-[150px] md:max-w-[300px]'>
                    <span className=' flex justify-center items-center'><img src={search} className="w-[16px]" /></span><input className='rounded-[15px] text-[13px] poppins w-full outline-none pl-2' placeholder='Search Products' onChange={(e) => {
                        setSearchData(e?.target?.value)
                    }} type="text" />
                </div>
                <div className='w-fit flex justify-center items-center gap-1'>
                    <h1 className='poppins text-[12px]'>Total Products : <span className='poppins text-[13px] font-[500]'>{allProducts?.products?.length}</span></h1>
                </div>
            </div>

            <div className='w-full flex gap-4 pt-10 pb-10'>

                {/* filters */}
                <div className='hidden md:block w-[20%] bg- px-2 pt-4 poppins'>
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
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 px-4 md:pr-4'>
                    {
                        allproductsApiData?.products?.length > 0 ? 
                        // allProducts?.products?.length > 0 ?
                            <>
                                {
                                    // allProducts?.products
                                    allproductsApiData?.products
                                        .filter((filterValue) => {
                                            if (searchData === '') {
                                                return filterValue
                                            } else if (filterValue?.title?.toLowerCase().includes(searchData?.toLowerCase())) {
                                                return filterValue
                                            }
                                        })
                                        .map((data, i) => (

                                            <ProductCard key={i} id={data?.id} title={data?.title} image={data?.image} weight={data?.weight} price={data?.price} />
                                        ))
                                }
                            </>
                            :
                            <div className=' border'>
                                <h1 className='w-fit'>no products</h1>
                            </div>
                    }
                </div>
            </div>
            {
                allProducts?.category === 'All Products' ?
                    ''
                    :
                    <RecentlyViewd />
            }
        </div>
    )
}

export default AllProductsView