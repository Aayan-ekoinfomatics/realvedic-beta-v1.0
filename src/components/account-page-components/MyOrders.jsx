import React from 'react'
import { Link } from 'react-router-dom';
import item from '../../assets/images/about-us.png'

const MyOrders = () => {

    const order_data = {
        orders: [
            { id: 0, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' }, { image: item, title: 'Noodles' }, { image: item, title: 'Atta' },], date: '05/02/2023', total_price: '520', },
            { id: 1, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' }, { image: item, title: 'Noodles' }, { image: item, title: 'Atta' },], date: '05/02/2023', total_price: '520', },
            { id: 2, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' }], date: '05/02/2023', total_price: '520', },
            { id: 3, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' }, { image: item, title: 'Noodles' }, { image: item, title: 'Atta' },], date: '05/02/2023', total_price: '520', },
            { id: 4, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' },], date: '05/02/2023', total_price: '520', },
            { id: 5, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' },], date: '05/02/2023', total_price: '520', },
            { id: 6, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' }, { image: item, title: 'Noodles' }, { image: item, title: 'Atta' },], date: '05/02/2023', total_price: '520', },
            { id: 7, status: 'In Progress', items: [{ image: item, title: 'Dosa Batter' }, { image: item, title: 'Noodles' }, { image: item, title: 'Atta' },], date: '05/02/2023', total_price: '520', },
        ],
    };


    return (
        <div className='w-full '>
            <div className='w-full mx-auto mt-[100px] md:mt-[150px] mb-[180px]'>
                <div className='w-full flex justify-center poppins items-center pb-5'><h1 className='text-[28px] font-[700]'>MY ORDERS</h1></div>
                <div className='w-[49%] mx-auto h-[1px] mb-10 bg-[#696969b6]'></div>
                <div className='w-full poppins'>
                    <div className='w-[95%] md:w-[70%] xl:w-[50%] mx-auto h-[600px] overflow-y-scroll px-2 md:px-4'>
                        {
                            order_data?.orders?.map((data, i) => (
                                <div key={i} className='w-full bg-[#FAF9F8] mb-8 shadow-md px-4 py-6'>
                                    <div className='w-full'>
                                        <div className='flex justify-between items-center'>
                                            <div className='text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-[500]'>{data?.status}</div>
                                            <div className='text-[13px] md:text-[15px]'>{data?.date}</div>
                                        </div>
                                        <div className='flex justify-between items-center mb-2'>
                                            <div className='text-[13px] md:text-[14px] lg:text-[16px]'>{data?.items?.length} Products</div>
                                            <div className='text-[14px] lg:text-[16px] xl:text-[18px] font-[500]'>Rs {data?.total_price}</div>
                                        </div>
                                        <div className='w-full flex justify-between gap-4 items-end'>
                                            <div className='w-fit grid grid-cols-3 justify-items-start items-center gap-2 md:gap-4'>
                                                {
                                                    data?.items?.map((item_data, item_index) => (
                                                        <div key={item_index} className=''>
                                                            <img src={item_data?.image} className='w-[60px]' alt="" />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='w-fit'>
                                                <Link to={`orders/` + data?.id}><button className='text-[13px] md:text-[16px] px-2 md:px-3 py-1 bg-[color:var(--button-primary)] shadow-md active:scale-[0.96]'>View</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders