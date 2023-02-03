import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VITE_BASE_LINK } from '../../../baseLink'

const ProductCard = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [variantDropdown, setVariantDropdown] = useState(false);

    const [selectedProductID, setSelectedProductID] = useState();


    useEffect(() => {
        // console.log(selectedProductID, 'product id')
        // console.log(props?.weight[activeIndex])
        // console.log(props?.price[activeIndex])
        // console.log(activeIndex, 'index')
    }, [selectedProductID, variantDropdown, activeIndex]);


    return (
        <>
            {/* <div className='w-full flex flex-col items-center shadow-md bg-[#fcfcfc] pt-2 max-w-[350px]'>
            <Link to={`/single-product/` + props?.id} className='w-full flex justify-center items-center'>
                <img src={props?.image} className='w-[400px]' alt="" />
                <img src={VITE_BASE_LINK + props?.image} className='w-[400px]' alt="" />
            </Link>
            <div className='w-full flex justify-between items-start px-2 pb-2'>
                <div className='text-[16px] w-[60%] poppins font-[500]'>
                    {props?.title}
                </div>
                <div className='poppins flex flex-col justify-end items-center gap-1'>
                    <div className='text-[14px] bg-[#FFF5D1] px-[4px]'>{props?.weight}m</div>
                    <div className='text-[16px] font-[500]'>Rs {props?.price}</div>
                </div>
            </div>
            <div className='w-full flex justify-end pb-2 pr-2'>
                <button className='px-4 py-2  bg-[#FCF55C] active:scale-[0.96] active:bg-[#d3cc4b] poppins text-[17px]'>ADD TO CART</button>
            </div>
        </div> */}

            <div className='w-full border shadow-md p-2'>
                <Link to={`/single-product/` + props?.id} className='w-full flex justify-center items-center'>
                    <img src={VITE_BASE_LINK + props?.image} className='w-full' alt="" />
                </Link>
                <div className='w-full flex justify-between items-center mt-1'>
                    <div className='w-[60%]'>
                        <h1 className='poppins text-[15px] font-[600]'>{props?.title}</h1>
                    </div>
                    <div className='w-fit p-1 px-[6px] flex justify-end items-center relative bg-[#ECECEC]'>
                        <h1 className='poppins text-[13px] font-[600]' onClick={() => {
                            console.log('clicked')
                            setVariantDropdown(!variantDropdown);
                            if (selectedProductID) {
                                setSelectedProductID(null);

                            } else {
                                setSelectedProductID(props?.id)
                            }
                        }}>{props?.weight[activeIndex]}gm</h1>
                        <div className={`w-full overflow-hidden absolute top-[100%] transition-all duration-300 bg-white shadow-2xl ${variantDropdown === true ? 'max-h-[120px] px-2 py-4 ease-in' : 'max-h-0 ease-out'}`}>
                            {
                                props?.weight?.map((data, i) => (
                                    <div key={i} onClick={() => {
                                        setVariantDropdown(false);
                                        setActiveIndex(i)
                                    }} className='border-b py-1 text-[13px] poppins'>{data}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-end mt-1'>
                    <div className='w-fiy'>
                        <h1 className='poppins text-[14px] font-[400]'>Rs {props?.price[activeIndex]}</h1>
                    </div>
                </div>
                <div className='w-full flex justify-end items-center mt-1'>
                    <button className='bg-[#FCF55C] active:bg-[#f5ec4b] px-8 py-2 poppins text-[15px] font-[500] cursor-pointer active:scale-[0.98]' onClick={() => {
                        let formdata = new FormData();
                        formdata.append('product_id', props?.id);
                        formdata.append('token', 'pbkdf2_sha256$390000$ATPA5wbz5hTMacZSTCv3O1$JjjjbunvnurIO+bG6IZu6urtVUX0HHsevG1UHBOQDK0=');
                        formdata.append('size', props?.weight[activeIndex]);
                        formdata.append('price', props?.price[activeIndex]),
                        axios.post(VITE_BASE_LINK + 'add_to_cart', formdata).then((response) => {
                            console.log(response?.data)
                            if(response?.data?.status === true) {
                                alert(response?.data?.message)
                            }else{
                                console.log('sklnaso')
                            }
                        })
                    }}>ADD TO CART</button>
                </div>
            </div>
        </>



    )
}

export default ProductCard