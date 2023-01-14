import React from 'react'
import blog_data from '../../mockApi/blogsSection'

const BlogsSection = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center mb-4'>
                <h1 className='px-8 py-2 bg-[color:var(--primary-color)] rounded-[20px] poppins text-[19px] font-[500] my-8'>Top Blogs</h1>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 lg:gap-8 lg:flex justify-evenly items-center mb-10'>
                {
                    blog_data?.blogs?.map((data, i) => (
                        <div key={i} className='w-full max-w-[300px] md:max-w-[400px] flex flex-col justify-center items-center px-4 pt-4 bg-[color:var(--primary-color)] rounded-[15px]'>
                            <div className='w-full  flex justify-center items-center'>
                                <img src={data?.image} className='w-full' alt="" />
                            </div>
                            <div className='py-3'>
                                <h1 className='poppins text-[16px] font-[600]'>{data?.title}</h1>
                            </div>
                            <div className='px-3'>
                                <h1 className='poppins text-[13px]'>{data?.content}</h1>
                            </div>
                            <div className='w-full flex justify-center items-center my-5'>
                                <button className='md:px-8 lg:px-14 py-2 bg-[#371106] text-white text-[12px] md:text-[14px] lg:text-[16px]'>Read More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BlogsSection