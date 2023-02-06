import React from 'react'
import tick from '../../assets/icons/tick-green.svg'
import item from '../../assets/images/about-us.png'

const SingleOrderDetails = () => {

    const order_details = {
        status: 'Delivered',
        items: [
            { id: 0, title: 'Lemon Grass Rasam | Instant Mix', quantity: '1', weight: '250', price: '180', image: item },
            { id: 1, title: 'Garlic Rasam Powder | Instant Mix', quantity: '1', weight: '250', price: '180', image: item },
            { id: 2, title: 'Neem Flower Rasam | Instant Mix', quantity: '1', weight: '250', price: '180', image: item },
            { id: 3, title: 'Lemon Grass Rasam | Instant Mix ', quantity: '1', weight: '250', price: '180', image: item },
        ],
        customer_name: 'Vivek Khanal',
        phone_code: '+91',
        phone_number: '7784555487',
        address_line_1: 'Realvedic, 76, 7th B cross',
        address_line_2: 'Kormangla 4th B block',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '50306',
        country: 'India',
        item_total: '540',
        delivery_charges: '30',
        order_total: '570',
    };


    return (
        <div className='w-full poppins'>
            <div className='w-full mx-auto mt-[50px] md:mt-[150px] mb-[180px]'>


                <div className='w-full flex justify-center poppins items-center pb-10'><h1 className='text-[28px] font-[700]'>ORDER DETAILS</h1></div>


                <div className='w-[90%] md:w-[70%] xl:w-[60%] mx-auto bg-[#eeeeeeb6] px-8 md:px-20 pb-2 pt-10 md:pt-20 shadow-lg mb-10'>


                    <div className='w-full flex justify-between items-start mb-10'>

                        <div className='w-full max-w-[200px]'>

                            <div className='w-full flex flex-col gap-5 justify-center items-center'>
                                <div className='w-full flex gap-4 justify-center items-center'>
                                    <div className='w-fit flex justify-center items-center'>
                                        <img src={tick} className='w-[28px]' alt="" />
                                    </div>
                                    <div className='w-full text-[16px] font-[600]'>Order received</div>
                                </div>
                                <div className='w-full flex gap-4 justify-center items-center'>
                                    <div className='w-fit flex justify-center items-center'>
                                        <img src={tick} className='w-[28px]' alt="" />
                                    </div>
                                    <div className='w-full text-[16px] font-[600]'>Order procesed</div>
                                </div>
                                <div className='w-full flex gap-4 justify-center items-center'>
                                    <div className='w-fit flex justify-center items-center'>
                                        <img src={tick} className='w-[28px]' alt="" />
                                    </div>
                                    <div className='w-full text-[16px] font-[600]'>Dispatched</div>
                                </div>
                                <div className='w-full flex gap-4 justify-center items-center'>
                                    <div className='w-fit flex justify-center items-center'>
                                        <img src={tick} className='w-[28px]' alt="" />
                                    </div>
                                    <div className='w-full text-[16px] font-[600]'>Delivered</div>
                                </div>
                            </div>

                        </div>

                        <div className=''>
                            <button className='text-[13px] px-2  py-1 bg-[color:var(--button-primary)] shadow-md active:scale-[0.96]'>Return an item</button>
                        </div>

                    </div>

                    <div className='w-full'>
                        <h1 className='text-center text-[18px] md:text-[22px] font-[500] mb-7'>Items</h1>
                        <div className='w-full'>
                            {
                                order_details?.items?.map((data, i) => (
                                    <div key={i} className='flex gap-3 justify-start items-center mb-10'>
                                        <div className='w-fit'>
                                            <img src={data?.image} className='w-full max-w-[220px]' alt="" />
                                        </div>
                                        <div className='w-full flex flex-col justify-start items-center'>
                                            <div className='w-full flex justify-between isolate md:flex-col'>
                                                <h1 className='text-[13px] md:text-[15px] font-[500]'>{data?.title}</h1>
                                                <h1 className='text-[13px] font-[300]'>Rs {data?.price}</h1>
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full flex justify-between items-start'>
                                                    <h1 className='text-[14px] text-[#696969b6] font-[300]'>Quantity</h1>
                                                    <h1 className='text-[14px] font-[300]'>x {data?.quantity}</h1>
                                                </div>
                                                <div className='w-full flex justify-between items-start'>
                                                    <h1 className='text-[14px] text-[#696969b6] font-[300]'>Pack Size</h1>
                                                    <h1 className='text-[13px] font-[300]'>{data?.weight}gm</h1>
                                                </div>
                                                <div className='w-full flex justify-between items-start'>
                                                    <h1 className='text-[14px] font-[500]'>Total</h1>
                                                    <h1 className='text-[16px] font-[500]'>Rs {data?.price}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className='w-[90%] md:w-[70%] xl:w-[60%] mx-auto bg-[#eeeeeeb6] px-8 md:px-20 py-10 md:py-12 shadow-lg'>
                    <div className='w-full'>
                        <h1 className='text-[15px] font-[500] mb-3'>Delivery Address</h1>
                        <h1 className='text-[15px] font-[300]'>{order_details?.customer_name},</h1>
                        <h1 className='text-[15px] font-[300]'><span className='mr-2'>{order_details?.phone_code}</span>{order_details?.phone_number},</h1>
                        <h1 className='text-[15px] font-[300]'>{order_details?.address_line_1},</h1>
                        <h1 className='text-[15px] font-[300]'>{order_details?.address_line_2},</h1>
                        <h1 className='text-[15px] font-[300]'>{order_details?.city}, {order_details?.state}</h1>
                        <h1 className='text-[15px] font-[300]'>{order_details?.pincode}</h1>
                        <h1 className='text-[15px] font-[300] mb-6'>{order_details?.country}</h1>
                        <h1 className='text-[15px] font-[500]'>Mode of Payment</h1>
                        <h1 className='text-[15px] font-[300]'>Other payment options</h1>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SingleOrderDetails