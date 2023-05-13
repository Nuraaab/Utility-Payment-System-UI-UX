import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { paymentMethods } from '../constants';
const ViewContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-[90%] rounded px-5 flex justify-evenly  flex-col 
`};
`;
const InfoContiner = styled.div`
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
${tw`
w-[90%] rounded px-5 flex justify-evenly items-center flex-col py-6
`};
`;

const Payment = () => {
    return (
        <div className='flex flex-col items-center mt-5 py-3 '>
            <ViewContiner>
            <h1 className='flex justify-center font-poppins font-bold text-[15px] mt-3' >PAY FOR YOUR ELECTRIC UTILITY</h1>

                <div className='w-full flex flex-row justify-between mt-8'>
                    
                    {paymentMethods.map((pay) => (
                       
                        <div id={pay.id} className='w-[50%] flex flex-col'>
                            <p className='font-poppins font-semibold text-[10px]'>{pay.name}</p>
                            <img className='max-w-[70px] h-[40px] rounded ' src={pay.logo}/>
                        </div>
                        
                    ))}
                </div>

            </ViewContiner>
            <InfoContiner className='mt-10'>

               
                <form className='w-full'>
                    <div className='w-full flex flex-col '>
                            <div className='pl-1 pr-1 mb-1 '>
                                <label className=' text-black  text-[15px] font-poppins font-bold flex justify-start'>SELECT PAYMENT METHOD</label>
                                <select  type='text' className='text-[13px] font-poppins font-bold  p-3 w-full bg-transparent border-2 cursor-pointer border-gray-500 focus:outline-none rounded mt-1'>
                                    <option>Cash</option>
                                    <option className='cursor-pointer '>Pay With Chapa Pay</option>
                                    <option>Pay With Credit Card</option>
                                    <option>Pay With Yene Pay</option>
                                </select>
                            </div>
                            <div className='pl-1 pr-1 mb-1 '>
                                <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Last Name</label>
                                <input value="Ahmed" type='text' className='text-[13px] font-poppins font-bold  p-2 w-full bg-transparent border-2  border-gray-500 focus:outline-none '></input>
                            </div>
                            
                    </div>

                </form>
                <div className='w-full pl-3 mb-1 flex justify-between  mt-10 flex-row'>
                    <button className='py-3 px-8 font-poppins font-semibold text-base bg-secondary text-white rounded'>BACK</button>
                    <button className='py-3 px-8 font-poppins font-semibold text-base bg-primary text-white rounded'>PAY</button>
                </div>
            </InfoContiner>

        </div>
    )
}

export default Payment