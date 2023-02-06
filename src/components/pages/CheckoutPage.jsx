import React, { useState } from 'react'
import item from '../../assets/images/about-us.png'
import edit from '../../assets/icons/edit.svg'
import cross from '../../assets/icons/cross.svg';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {

    const [popUpView, setPopUpView] = useState(false);

    const checkout_data = {
        personal_info: {
            first_name: 'Vivek',
            last_name: 'Khanal',
            email: 'vivek@gmail.com',
            phone_code: '+91',
            phone_number: '7784555487',
        },
        address_info: {
            address_line_1: 'Realvedic, 76, 7th B cross',
            address_line_2: 'Kormangla 4th B block',
            city: 'Bengaluru',
            state: 'Karnataka',
            pincode: '50306',
            country: 'India',
        },
        items: [
            { title: 'Garlic Rasam Powder | Instant Mix ', price: '180', quanity: '1', image: item, id: 0 },
            { title: 'Lemon Grass Rasam | Instant Mix ', price: '180', quanity: '2', image: item, id: 1 },
            { title: 'Garlic Rasam Powder | Instant Mix ', price: '180', quanity: '4', image: item, id: 2 },
        ],
        item_total: '540',
        delivery_charges: '40',
        order_total: '580',

    };


    return (
        <div className='w-full poppins px-[20px] md:px-[50px] xl:px-[100px] relative'>

            {/* breadcrumbs */}
            <div className='w-full flex justify-start items-center gap-2 py-5'>
                <Link to='/cart' className='text-[13px]'>Cart</Link>
                <h1 className='text-[13px]'>&#62;</h1>
                <h1 className='text-[13px] font-[600]'>Checkout</h1>
                <h1 className='text-[13px]'>&#62;</h1>
                <h1 className='text-[13px]'>Order Confirmation</h1>
            </div>

            <h1 className='text-[35px] font-[600] my-[40px] text-center md:text-left'>Checkout</h1>


            <div className='w-[90%] xl:w-[80%] mx-auto bg-[#] mb-20'>



                {/* flex */}
                <div className='w-full flex flex-col xl:flex-row'>

                    {/* flex - 1 */}
                    <div className='w-full md:p-4'>

                        {/* personal information */}
                        <div className='w-full relative px-4 py-2 mb-7 shadow-md bg-[#FAF9F8]'>
                            <h1 className='text-[15px] font-[600] mb-3 pt-1'>Personal Information</h1>
                            <div className='w-full grid-cols-1 grid md:grid-cols-2 mx-auto'>
                                <div className='flex justify-start gap-2 items-center my-2'>
                                    <h1 className='text-[13px] font-[500]'>Name:</h1>
                                    <h1 className='text-[13px]'>{checkout_data?.personal_info?.first_name} {checkout_data?.personal_info?.last_name}</h1>
                                </div>
                                <div className='flex justify-start gap-2 items-center my-2'>
                                    <h1 className='text-[13px] font-[500]'>Phone number:</h1>
                                    <h1 className='text-[13px]'>{checkout_data?.personal_info?.phone_code} {checkout_data?.personal_info?.phone_number}</h1>
                                </div>
                                <div className='flex justify-start gap-2 items-center my-2'>
                                    <h1 className='text-[13px] font-[500]'>Email:</h1>
                                    <h1 className='text-[13px]'>{checkout_data?.personal_info?.email}</h1>
                                </div>
                            </div>
                            <div className='w-fit absolute bottom-0 right-0 mr-3 mb-2'>
                                <img src={edit} className='w-[15px] cursor-pointer' alt="" onClick={() => setPopUpView(true)} />
                            </div>
                        </div>


                        {/* address */}
                        <div className='w-full flex flex-col mx-auto shadow-md bg-[#FAF9F8] p-4 relative'>
                            <h1 className='text-[15px] font-[600] mb-3'>Address Information</h1>
                            <h1 className='text-[13px] font-[500] mt-4 mb-3'>Address:</h1>
                            <div className='w-full items-center'>
                                <h1 className='text-[13px] flex flex-col'><span className=''>{checkout_data?.address_info?.address_line_1}</span><span className=''>{checkout_data?.address_info?.address_line_2}</span><span className=''>{checkout_data?.address_info?.pincode}</span></h1>
                            </div>
                            <div className='w-fit absolute bottom-0 right-0 mr-3 mb-2'>
                                <img src={edit} className='w-[15px] cursor-pointer' alt="" onClick={() => setPopUpView(true)} />
                            </div>
                        </div>


                    </div>


                    {/* flex - 2 */}
                    <div className='w-full mt-7 md:mt-0 md:p-4 xl:max-w-[550px] mx-auto '>


                        {/* order details */}
                        <div className='w-full bg-[#FAF9F8] shadow-md p-4'>
                            <div className='w-full flex justify-between items-center pt-1 mb-8'>
                                <h1 className='text-[17px] font-[600]'>Order Details</h1>
                            </div>
                            <div className='w-full md:px-4'>
                                <div className='flex justify-between md:w-[60%] gap-2 items-center'>
                                    <h1 className='text-[13px]'>Order Value:</h1>
                                    <h1 className='text-[13px]'>Rs {checkout_data?.item_total}</h1>
                                </div>
                                <div className='flex justify-between md:w-[60%] gap-2 items-center'>
                                    <h1 className='text-[13px]'>Discount:</h1>
                                    <h1 className='text-[13px]'></h1>
                                </div>
                                <div className='flex justify-between md:w-[60%] gap-2 items-center'>
                                    <h1 className='text-[13px]'>Delivery charges:</h1>
                                    <h1 className='text-[13px]'>Rs {checkout_data?.delivery_charges}</h1>
                                </div>
                                <div className='flex justify-between md:w-[60%] gap-2 items-center'>
                                    <h1 className='text-[14px] font-[600]'>Total:</h1>
                                    <h1 className='text-[14px] font-[600]'>Rs {checkout_data?.order_total}</h1>
                                </div>
                                <div className='w-full flex justify-between items-center mt-20 mb-3'>
                                    <h1 className='text-[14px] font-[600]'>Items</h1>
                                    <h1 className='text-[13px] underline'>edit</h1>
                                </div>
                                <div className='w-full max-h-[200px] overflow-y-scroll md:px-3'>
                                    {
                                        checkout_data?.items?.map((data, i) => (
                                            <div className='w-full flex justify-start items-start gap-2 my-2' key={i}>
                                                <div className='w-fit'>
                                                    <img src={data?.image} className='w-[60px]' alt="" />
                                                </div>
                                                <div className='w-full flex flex-col'>
                                                    <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center'>
                                                        <h1 className='text-[11px] md:text-[13px] font-[500]'>{data?.title}</h1>
                                                        <h1 className='text-[11px] md:text-[13px] font-[500]'>Rs {data?.price}</h1>
                                                    </div>
                                                    <h1 className='text-[9px]'>qty: x{data?.quanity}</h1>
                                                    <h1 className='text-[9px]'>product code: {data?.id}</h1>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>



                    </div>

                </div>


                <div className='w-full flex justify-end items-center mt-4 px-4'>
                    <Link to='/order-confirmed'>
                        <button className='text-[14px font-[500] px-4 py-2 bg-[color:var(--button-primary)] shadow-md active:scale-[0.96]'>CONTINUE</button>
                    </Link>
                </div>


            </div>

            <div className={`fixed top-[30%] right-[30%] w-full max-w-[700px] h-[500px] bg-white z-[100] transition-all duration-300 ${popUpView ? 'block' : 'hidden'}`}>
                <div className='w-full relative'>
                    <div className='w-fit absolute top-0 right-0 mt-2 mr-2'>
                        <img src={cross} className='w-[20px] cursor-pointer' alt="" onClick={() => setPopUpView(false)} />
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 bg-black opacity-30 z-[90] ${popUpView ? 'block' : 'hidden'}`} onClick={() => setPopUpView(false)}>

            </div>

        </div>
    )
}

export default CheckoutPage