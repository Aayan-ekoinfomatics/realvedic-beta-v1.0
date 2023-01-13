import React from 'react'
import { useRecoilState } from 'recoil'
import sidebarAtom from '../../recoil/atoms/sidebarAtom'
import cross from '../../assets/icons/cross.svg'

const Sidebar = () => {

    const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarAtom);

    console.log(sidebarToggle)

  return (
    <>
    <div className={`h-screen bg-[color:var(--primary-color)] fixed right-0 z-[500] transition-all duration-200 ${sidebarToggle ? 'ease-in w-[80%]' : 'w-0 ease-out'}`}>
        <div className='w-full mt-10 pl-4'>
            <span className='w-fit'>
                <img src={cross} className='w-[28px]' alt="" onClick={() => setSidebarToggle(false)}/>
            </span>
        </div>
    </div>
    <div className={`fixed inset-0 bg-black bg-opacity-40 z-[480] transition-all duration-200 ${sidebarToggle ? 'ease-in block' : 'hidden ease-out'}`} onClick={() => setSidebarToggle(false)}>

    </div>
    </>
  )
}

export default Sidebar