import React from 'react'
import tick from '../../assets/icons/tick-green.svg'

const OrderConfirmedPage = () => {

    const profile_data = {
        first_name: 'Vivek',
        last_name: 'Khanal',
    };


    return (
        <div className='w-full'>
            <div className='w-full flex justify-center items-center h-[60vh]'>
                <div className='w-full flex flex-col justify-center items-center gap-2 max-w-[400px] py-4'>
                    <div className='w-fit'>
                        <img src={tick} className='w-[80px]' alt="" />
                    </div>
                    <h1 className='text-[15px]'>Hey, {profile_data?.first_name}</h1>
                    <h1 className='text-[20px] font-[500]'>Your order is confirmed</h1>
                    <div className='w-[70%] text-[15px] mt-2 mx-auto text-center'>
                        <h1>We'll send you a shipping confirmation email as soon as your order ships</h1>
                    </div>
                    <div className='w-full flex justify-center items-center mt-2'>
                        <button className='px-3 py-[6px] bg-[color:var(--button-primary)] font-[500] text-[16px] active:scale-[0.96] shadow-md'>CHECK STATUS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmedPage