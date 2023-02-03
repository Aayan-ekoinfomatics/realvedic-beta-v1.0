import React, { useState } from 'react'
import eye_open from '../../assets/icons/eye-open.svg'
import eye_closed from '../../assets/icons/eye-closed.svg'
import fb from '../../assets/icons/facebook-blue.svg'
import google from '../../assets/icons/google.svg'

const LoginPage = () => {

    const [passwordView, setPasswordView] = useState(false);


    return (
        <div className='w-full flex justify-center items-center h-[80vh] poppins px-4'>
            <div className='w-full max-w-[500px] flex flex-col justify-between items-center'>

                <div className='w-full flex gap-2'>
                <div className='w-full py-3 bg-[#fcfcfc] text-white flex justify-center items-center my-2 cursor-pointer active:scale-[0.96] active:bg-[#f0f0f0] shadow-md'>
                    {/* bg-[#1877f2] */}
                    <img src={fb} className='w-[28px]' alt="" />
                </div>
                <div className='w-full py-3 bg-[#fcfcfc] text-white flex justify-center items-center my-2 cursor-pointer active:scale-[0.96] active:bg-[#f0f0f0] shadow-md'>
                    {/* bg-[#d4462f] */}
                    <img src={google} className='w-[28px]' alt="" />
                </div>
                </div>
                <div className='w-full flex justify-center items-center gap-3 my-2'>
                    <span className='w-full bg-[#000] h-[1px]'></span>
                    <span className='w-fit'>Or</span>
                    <span className='w-full bg-[#000] h-[1px]'></span>
                </div>
                <div className='w-full'>
                    <div className='w-full flex flex-col my-2'>
                        <label htmlFor="email" className='text-[12px]'>Email</label>
                        <input type="text" name='email' className='border py-2 outline-none px-2 text-[13px]' placeholder='' />
                    </div>
                    <div className='w-full flex flex-col my-2'>
                        <label htmlFor="password" className='text-[12px]'>Password</label>
                        <span className='border w-full flex justify-center items-center bg-white pr-1'><input type={passwordView ? 'text' : 'password'} name='password' className='py-2 outline-none px-2 text-[13px] w-full' placeholder='' /><span className=''><img onClick={() => setPasswordView(!passwordView)} src={passwordView ? eye_closed : eye_open} className='w-[25px] cursor-pointer' alt="" /></span></span>
                    </div>
                    <div className='w-full flex justify-end items-center'>
                        <h1 className='text-[10px]'>Forgot password ?</h1>
                    </div>
                    <div className='w-full my-2'>
                        <button className='w-full py-2 flex justify-center items-center text-[17px] bg-[color:var(--button-primary)] active:scale-[0.96] active:bg-[#d6cf4c] shadow-md tracking-[1px]'>Login</button>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <h1 className='text-[10px]'>New here? Sign up!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage