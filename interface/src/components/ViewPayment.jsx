import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { arrow, close, view, water } from '../assets';
const ViewContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-full rounded  flex justify-between  flex-row mt-1 py-2 px-1 items-center
`};
`;
const DropContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-[25%] rounded px-2 flex justify-start ml-3  flex-col justify-start py-3 min-h-[700px]
`};
`;
const BillContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-full rounded px-2 flex justify-evenly items-end flex-col py-3
`};
`;
const ViewPayment = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full pr-12 flex flex-row justify-between'>
                <DropContiner>
                    <ul>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px] '>Add Customers Utility information</li>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px] '>Manage Customers Utility information</li>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px] text-red-400'>Generate Payment Bill</li>
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
                    <div className=' w-full px-10 flex flex-col items-center mt-2'>
                        <h1 className='font-poppins font-bold text-[18px] justify-center'>VIEW CUSTOMERS PAYMENT INFORMATION</h1>

                        <ViewContiner >
                            <p className='font-poppins font-semibold text-[14px] '>Abubeker Ahmed </p>
                            <div className='w-[50%] flex flex-row justify-evenly'>
                                <img className='w-[35px] h-10px]' src={view} />
                                <button className='px-6 py-2 bg-primary rounded font-poppins font-semibold text-[13px] text-white '>Generate Bill</button>
                            </div>
                        </ViewContiner>
                        <BillContiner>
                            <img src={close} className='w-[25px] h-[25px] ' />
                            <form className='flex flex-row mt-5 w-full justify-between'>

                                <div className='w-[49%] flex flex-col  '>
                                    <div className=''>
                                        <input placeholder='RECEIPT NUMBER' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                    </div>
                                    <div className='mt-5 '>
                                        <input placeholder='OFFICER NAME' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px] '></input>
                                    </div>
                                    <div className='mt-5'>
                                        <input placeholder='ADDRESS' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                    </div>

                                </div>
                                <div className='w-[49%] flex flex-col '>
                                    <div className=''>
                                        <input placeholder='PHONE NUMBER' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                    </div>
                                    <div className='mt-5'>
                                        <input placeholder='DATE' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                    </div>
                                    <div className='mt-5'>
                                        <input placeholder='CITY' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                    </div>


                                </div>

                            </form>
                            <div className='w-full mt-2 flex justify-between items-end  flex-row '>
                                <div className='w-[49%]'>
                                    <input placeholder='SIGN CODE' type='text' className='  p-3 w-full bg-transparent border-2  border-gray-400 focus:outline-none rounded-[10px]'></input>
                                </div>
                                <button className='py-4 px-9 font-poppins font-semibold text-base bg-black text-white rounded'>GENERATE AND SEND</button>
                            </div>
                        </BillContiner>


                    </div>
                    <div className='w-full pl-3 mb-1 flex justify-center items-center mt-5 flex-row'>
                        <button className='py-3 px-1 font-poppins font-semibold text-[15px]  text-primary rounded'>More</button>
                        <img className='w-[20px] h-[10px]' src={arrow} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ViewPayment