import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { arrow, view, water } from '../assets';
const ViewContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-full rounded  flex justify-between  flex-row mt-4 py-2 px-1 items-center
`};
`;
const DropContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-[25%] rounded px-2 flex justify-start ml-3  flex-col justify-start py-3 min-h-[700px]
`};
`;
const ManageCustomer = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full pr-12 flex flex-row justify-between'>
                <DropContiner>
                    <ul>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px] '>Add Customers Utility information</li>
                        <li className='ml-3 mt-10 font-poppins font-bold text-[15px] text-red-400'>Manage Customers Utility information</li>
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
                        <h1 className='font-poppins font-bold text-[18px] justify-center'>MANAGE CUSTOMERS UTILITY INFORMATION</h1>
                        <ViewContiner >
                            <p className='font-poppins font-semibold text-[14px] '>Abubeker Ahmed </p>
                            <div className='w-[50%] flex flex-row justify-evenly'>
                                <button className='px-6 py-2 bg-secondary rounded font-poppins font-semibold text-[13px] text-white '>Delete</button>
                                <button className='px-6 py-2 bg-primary rounded font-poppins font-semibold text-[13px] text-white '>Update</button>
                                <img className='w-[35px] h-10px]' src={view} />

                            </div>
                        </ViewContiner>
                        <ViewContiner >
                        <p className='font-poppins font-semibold text-[14px] '>Nuru Ahmed  </p>
                            <div className='w-[50%] flex flex-row justify-evenly'>
                                <button className='px-6 py-2 bg-secondary rounded font-poppins font-semibold text-[13px] text-white '>Delete</button>
                                <button className='px-6 py-2 bg-primary rounded font-poppins font-semibold text-[13px] text-white '>Update</button>
                                <img className='w-[35px] h-10px]' src={view} />

                            </div>
                        </ViewContiner>
                        <ViewContiner >
                        <p className='font-poppins font-semibold text-[14px] '>Samuel Cheru </p>
                            <div className='w-[50%] flex flex-row justify-evenly'>
                                <button className='px-6 py-2 bg-secondary rounded font-poppins font-semibold text-[13px] text-white '>Delete</button>
                                <button className='px-6 py-2 bg-primary rounded font-poppins font-semibold text-[13px] text-white '>Update</button>
                                <img className='w-[35px] h-10px]' src={view} />

                            </div>
                        </ViewContiner>
                        <ViewContiner >
                        <p className='font-poppins font-semibold text-[14px] '>Meron Mengstu </p>
                            <div className='w-[50%] flex flex-row justify-evenly'>
                                <button className='px-6 py-2 bg-secondary rounded font-poppins font-semibold text-[13px] text-white '>Delete</button>
                                <button className='px-6 py-2 bg-primary rounded font-poppins font-semibold text-[13px] text-white '>Update</button>
                                <img className='w-[35px] h-10px]' src={view} />

                            </div>
                        </ViewContiner>

                    </div>
                    <div className='w-full pl-3 mb-1 flex justify-center items-center mt-5 flex-row'>
                        <button className='py-3 px-1 font-poppins font-semibold text-[15px]  text-primary rounded'>More</button>
                        <img className='w-[20px] h-[10px]' src={arrow}/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ManageCustomer