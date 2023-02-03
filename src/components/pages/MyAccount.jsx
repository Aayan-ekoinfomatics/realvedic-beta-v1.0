import React, { useEffect, useState } from 'react'

const MyAccount = () => {

    const [saveEditData, setSaveEditData] = useState();


    useEffect(() => {
        console.log(saveEditData)
    }, [saveEditData])


    return (
        <div className='w-full poppins'>

            {/* page heading */}
            <div className='w-full flex md:block justify-center items-center md:pl-20 py-10'>
                <h1 className='text-[28px] font-[500]'>Account Details</h1>
            </div>


            <div className='w-[80%] md:w-[60%] mx-auto md:mt-20 mb-[180px]'>


                {/* personal info line */}
                <h1 className='text-[17px] pb-4 font-[500]'>Personal information</h1>

                <div className='w-full grid grid-cols-2 gap-3'>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="first-name" className='text-[12px]'>Fist Name</label>
                        <input type="text" name='first-name' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                            setSaveEditData({
                                ...saveEditData, 
                                first_name: e?.target?.value
                            })
                        }} placeholder='enter first name..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="last-name" className='text-[12px]'>Last Name</label>
                        <input type="text" name='last-name' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                            setSaveEditData({
                                ...saveEditData, 
                                last_name: e?.target?.value
                            })
                        }} placeholder='enter last name..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="email" className='text-[12px]'>Email</label>
                        <input type="email" name='email' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                            setSaveEditData({
                                ...saveEditData, 
                                email: e?.target?.value
                            })
                        }} placeholder='enter email..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="number" className='text-[12px]'>Phone Number</label>
                        <input type="number" name='number' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                            setSaveEditData({
                                ...saveEditData, 
                                phone: e?.target?.value
                            })
                        }} placeholder='enter phone number..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="dob" className='text-[12px]'>Date of Birth</label>
                        <input type="date" name='dob' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                            setSaveEditData({
                                ...saveEditData, 
                                dob: e?.target?.value
                            })
                        }} placeholder='enter phone birthday..' />
                    </div>
                </div>



                {/* address line */}
                <h1 className='text-[17px] pb-4 pt-[60px] font-[500]'>Address Information</h1>

                <div className='w-full grid grid-cols-2 gap-3'> 
                    <div className='w-full flex flex-col'>
                        <label htmlFor="address-line-1" className='text-[12px]'>Address Line 1</label>
                        <input type="text" name='address-line-1' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                            setSaveEditData({
                                ...saveEditData,
                                add_line_1: e?.target?.value,
                            })
                        }} placeholder='enter address line 1..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="address-line-2" className='text-[12px]'>Address Line 2</label>
                        <input type="text" name='address-line-2' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                            setSaveEditData({
                                ...saveEditData,
                                add_line_2: e?.target?.value,
                            })
                        }} placeholder='enter address line 2..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="city-district" className='text-[12px]'>City/District</label>
                        <input type="text" name='city-district' className='w-full outline-none text-[14px] border py-2 px-2' placeholder='enter city or district..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="state" className='text-[12px]'>State</label>
                        <input type="text" name='state' className='w-full outline-none text-[14px] border py-2 px-2' placeholder='enter state..' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="country" className='text-[12px]'>Country</label>
                        <input type="text" name='country' className='w-full outline-none text-[14px] border py-2 px-2' placeholder='enter country..' />
                    </div>
                </div>



                {/* submit button */}
                <div className='w-full flex justify-end items-center my-8'>
                    <button className='text-[16px] font-[500] px-4 py-2 active:scale-[0.96] bg-[color:var(--button-primary)]'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default MyAccount