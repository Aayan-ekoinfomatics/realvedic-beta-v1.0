import React from 'react'
import yt from '../../assets/images/youtube.png'
import product from '../../assets/images/single_product.png'
import foodDetails from '../../mockApi/singleFoodProductLandingPage'

const SingleFoodProductSection = () => {
    return (
        // <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 px-5 md:px-10 mb-6 border border-red-500'>
        <div className='w-full px-4 md:px-10 mb-6'>

            {/* <div className='w-full bg-[color:var(--primary-color)] py-4 pb-5 rounded-[25px] col-start-1 col-end-3 md:col-start-1 md:col-end-2'>
                <h1 className='poppins text-[18px] text-center py-4'>Make Best Dosa with us!</h1>
                <img src={yt} className='' alt="" />
            </div>


            <div className=' bg-[color:var(--primary-color)] rounded-[25px] flex flex-col items-center pt pb-5 md:col-start-2 md:col-end-3 col-start-1 col-end-2'>
                <p className='poppins text-[15px] md:text-[18px] font-[500] py-6'>Our Best Selling Product</p>
                <div className='w-full'>
                    {
                        foodDetails?.food?.map((data, i) => (
                            <React.Fragment key={i}>
                                <div className='w-[70%] mx-auto flex justify-center items-center bg-[#FCEDD1] mb-2 py-2'>
                                    <img src={data?.image} className='w-full max-w-[250px]' alt="" />
                                </div>
                                <div className='w-[70%] mx-auto'>
                                    <div className='w-full flex justify-between'>
                                        <div className='w-full max-w-[200px]'>
                                            <p className='poppins text-[13px] md:text-[16px] font-[500]'>{data?.title}</p>
                                        </div>
                                        <div className='w-full flex flex-col'>
                                            <div className='flex justify-end'>
                                                <p className='px-2 py-1 bg-[#FFF5D1] text-[13px] md:text-[16px] font-[500]'>{data?.weight}g</p>
                                            </div>
                                            <div className='flex justify-end'>
                                                <p>Rs {data?.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col items-end gap-3 mt-5'>
                                        <div className=''>
                                            <button className='bg-[#FCF55C] px-2 py-1 poppins text-[14px]'>ADD TO CART</button>
                                        </div>
                                        <div className=''>
                                            <h1 className='poppins text-[13px]'>View Details</h1>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>


            <div className=' bg-[color:var(--primary-color)] rounded-[25px] py-4 md:col-start-3 md:col-end-4 col-start-2 col-end-3'>
                <div className='w-full py-4 '>
                    <h1 className='poppins text-[15px] md:text-[18px] font-[500] text-center'>Our special recipe!</h1>
                </div>
                {
                    foodDetails?.blog?.map((data, i) => (
                        <div key={i} className='w-full flex flex-col px-4 md:px-16 mt-4 md:mt-6'>
                            <div className='w-full'>
                                <p className='text-[12px] md:text-[15px] poppins font-[500]'>{data?.content}</p>
                            </div>
                            <div className='w-full my-2 px-2 md:px-5 mt-3'>
                                {data?.points?.map((sub_data, sub_i) => (
                                    <li className='text-[12px] md:text-[15px] poppins font-[500] md:my-3' key={sub_i}>{sub_data}</li>
                                ))}
                            </div>
                        </div>
                    ))
                }
                <div className='w-full flex justify-center items-center mt-8 md:mt-8'>
                    <button className=' w-full max-w-[187px] md:max-w-[250px] px-3 md:px-6 py-2 md:py-3 text-white poppins bg-[#371106]'>Read More</button>
                </div>
            </div> */}

            <div className='flex flex-col lg:flex-row gap-4 md:gap-8'>
                <div className='flex-1 bg-[color:var(--primary-color)] rounded-[15px] pb-6 md:pb-14'>
                    <h1 className='poppins text-[15px] md:text-[18px] font-[500] py-4 text-center'>{foodDetails?.video_data?.title}</h1>
                    <div className='w-full'>
                        <img src={foodDetails?.video_data?.video} className='max-h-[350px] w-full' alt="" />
                    </div>
                </div>


                <div className='flex-1 bg-[color:var(--primary-color)] rounded-[15px]'>
                    <p className='poppins text-[15px] md:text-[18px] font-[500] py-4 text-center'>{foodDetails?.food?.title}</p>
                    <div className='w-[80%] md:w-[65%] mx-auto flex justify-center items-center bg-[#FCEDD1] mt-6'>
                        <img src={foodDetails?.food?.image} className='w-[200px]' alt="" />
                    </div>
                    <div className='w-[80%] md:w-[65%] mx-auto flex justify-between my-1'>
                        <div className='max-w-[130px]'>
                            <p className='poppins text-[13px] md:text-[17px]'>{foodDetails?.food?.title}</p>
                        </div>
                        <div>
                            <p className='poppins text-[12px] md:text-[15px]'>{foodDetails?.food?.weight}gm</p>
                            <p className='poppins text-[13px] md:text-[17px]'>₹ {foodDetails?.food?.price}</p>
                        </div>
                    </div>
                    <div className=' w-full md:w-[85%] flex justify-end mb-2 mt-4'>
                        <div className='w-full flex flex-col items-end pr-8 md:pr-4'>
                            <button className='bg-[#FCF55C] text-[13px] md:text-[15px] px-2 md:px-4 py-1 '>ADD TO CART</button>
                            <p className='text-[12px] md:text-[13px] underline'>View more</p>
                        </div>
                    </div>
                </div>


                <div className='flex-1 bg-[color:var(--primary-color)] rounded-[15px]'>
                    <p className='poppins text-[15px] md:text-[18px] font-[500] py-4 text-center'>{foodDetails?.blog?.title}</p>
                    <div className='w-full flex flex-col justify-evenly items-center'>
                        <div className='w-[86%] md:w-[80%] mx-auto mb-4'>
                            <div className='w-full mt-10'>
                                <h1 className='poppins text-[12px] md:text-[14px] lg:text-[15px] '>{foodDetails?.blog?.content}</h1>
                            </div>
                            <div className='w-[90%] lg:w-[85%] mx-auto my-3 mt-6'>
                                {
                                    foodDetails?.blog?.points?.map((data, i) => (
                                        <li key={i} className='poppins text-[12px] md:text-[13px] lg:text-[14px] my-1 md:my-2'>{data}</li>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center md:mt-[30px] mb-2'>
                            <button className='bg-[#371106] px-8 py-2 text-white text-[13px] md:text-[15px]'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='flex flex-col md:hidden gap-3 px-5'>
                <div className='flex-1 bg-[color:var(--primary-color)]'>
                    <p>{foodDetails?.video_data?.title}</p>
                    <img src={foodDetails?.video_data?.video} alt="" />
                </div>

                <div className='flex-1 flex gap-2'>
                    <div className='flex-1 bg-[color:var(--primary-color)]'>
                        <p>{foodDetails?.food?.title}</p>
                        <div className='w-full'>
                            <img src={foodDetails?.food?.image} alt="" />
                        </div>
                        <div className='w-full'>
                            <p>aaaaaaaaaaaaaa</p>                            
                            <p>aaaaaaaaaaaaaa</p>                            
                            <p>aaaaaaaaaaaaaa</p>                            
                            <p>aaaaaaaaaaaaaa</p>                            
                        </div>
                    </div>
                    <div className='flex-1 bg-[color:var(--primary-color)]'>
                        <p>{foodDetails?.blog?.title}</p>
                        <div className='w-full'>
                            <p className='poppins text-[12px]'>{foodDetails?.blog?.content}</p>
                            <div className='w-full'>
                                {
                                    foodDetails?.blog?.points?.map((data, i) => (
                                        <li className='poppins text-[10px]'>{data}</li>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <button className='px-5 py-2 text-white'>Read More</button>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    )
}

export default SingleFoodProductSection