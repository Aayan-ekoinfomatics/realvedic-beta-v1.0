import React, { useEffect, useState } from 'react'

const AccountDetails = () => {

    const [saveEditData, setSaveEditData] = useState();


    useEffect(() => {
        console.log(saveEditData)
    }, [saveEditData])


    return (
        <div className='w-full'>
            <div className='w-[90%] md:w-[70%] mx-auto mt-[100px] md:mt-[150px] mb-[180px]'>

                <div className='w-full flex justify-center poppins items-center pb-10'><h1 className='text-[28px] font-[700]'>ACCOUNT DETAILS</h1></div>

                {/* personal info line */}
                <h1 className='text-[17px] pb-4 font-[500]'>Personal information</h1>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-3'>
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
                    <div className='w-full flex justify-start items-center gap-3'>
                        <div className='w-full max-w-[60px] flex flex-col'>
                            <label htmlFor="phone-code" className='text-[12px]'>Ph Code</label>
                            <input type="number" min={0} name='phone-code' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                                setSaveEditData({
                                    ...saveEditData,
                                    phone_code: e?.target?.value
                                })
                            }} placeholder='+00' />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor="number" className='text-[12px]'>Ph Number</label>
                            <input type="number" name='number' className='w-full outline-none text-[14px] border py-2 px-2' onChange={(e) => {
                                setSaveEditData({
                                    ...saveEditData,
                                    phone: e?.target?.value
                                })
                            }} placeholder='enter phone number..' />
                        </div>
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

                <div className='w-full grid-cols-1 grid sm:grid-cols-2 gap-3'>
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
                    <div className='w-full flex flex-col'>
                        <label htmlFor="pincode" className='text-[12px]'>Pincode</label>
                        <input type="number" min={0} name='pincode' className='w-full outline-none text-[14px] border py-2 px-2' placeholder='enter pincode..' />
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

export default AccountDetails