import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { water } from '../assets';
const ViewContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-full rounded  flex justify-between  flex-row  py-2 px-1 max-h-[100px] ml-5
`};
`;
const DropContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-[25%] rounded px-2 flex justify-start ml-3  flex-col justify-start py-3 min-h-[700px]
`};
`;
const AddCustomer = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full pr-12 flex flex-row justify-between'>
                <DropContiner>
                    <ul>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px] text-red-400'>Add Customers Utility information</li>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px]'>Manage Customers Utility information</li>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px]'>Generate Payment Bill</li>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px]'>View Data Analysis</li>
                    </ul>
                </DropContiner>
                <div className='w-full flex flex-col'>
                    <ViewContiner>
                        <div className='w-full flex flex-row items-center '>
                            <img className='w-[70px] h-[70px]' src={water} />
                            <h1 className='font-poppins font-semibold text-[20px] text-homeBg ml-3'>Ethiopian Water Utility</h1>
                        </div>
                    </ViewContiner>
                    <div className=' w-full px-10 flex flex-col items-center mt-5'>
                        <h1 className='font-poppins font-bold text-[18px] justify-center'>ADD CUSTOMERS UTILITY INFORMATION</h1>
                        <form className='flex flex-row mt-6 w-full justify-between'>

                            <div className='w-[49%] flex flex-col  '>
                                <div className=''>
                                   <input placeholder='First Name' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                                <div className='mt-5 '>
                                    <input placeholder='Last Name' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px] '></input>
                                </div>
                                <div className='mt-5'>
                                    <input placeholder='Address' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                                <div className='mt-5'>
                                    <input placeholder='Utility Cost' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                            </div>
                            <div className='w-[49%] flex flex-col '>
                                <div className=''>
                                   <input placeholder='Phone Number' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                                <div className='mt-5'>
                                   <input placeholder='House Number' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                                <div className='mt-5'>
                                    <input placeholder='Start Date' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                                <div className='mt-5'>
                                    <input placeholder='End Date' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                                
                            </div>

                        </form>

                    </div>
                    <div className='mt-6 flex justify-end items-end  flex-row px-10'>
                       
                        <button className='py-4 px-9 font-poppins font-semibold text-base bg-black text-white rounded'>ADD</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AddCustomer