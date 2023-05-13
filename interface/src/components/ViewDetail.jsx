import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { serviceProvider, userInformation } from '../constants';
const ViewContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-[90%] rounded px-5 flex justify-evenly items-center flex-row 
`};
`;
const InfoContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-[90%] rounded px-5 flex justify-evenly items-center flex-col py-6
`};
`;
const ViewDetail = () => {
  return (

    <div className='flex flex-col items-center mt-5 py-3 '>
      <InfoContiner className='mt-5'>
        
          <h1 className='flex justify-center font-poppins font-bold text-[20px] '>MANAGE YOUR PROFILE</h1>
       
            <img className='w-[120px] h-[120px] rounded-full mt-3' src='https://nuraaab.netlify.app/static/media/home.6922d78c4c62aa283696.jpg' />
            <button className='font-poppins text-[15px] font-semibold justify-end text-white bg-primary mt-3 mb-4 py-2 px-7 rounded'>Browse</button>
          <form className='w-full'>
        <div className='w-full flex flex-row '>
          <div className='w-[46%] flex justify-start flex-col'>
          <div className='pl-1 pr-1 mb-1 '>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>First Name</label>
            <input value="Nuru" type='text' className='text-[13px] font-poppins font-bold  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-1 pr-1 mb-1 '>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Last Name</label>
            <input value="Ahmed" type='text' className='text-[13px] font-poppins font-bold  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-1 pr-1 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Email Address</label>
            <input value="nuraaab463@gmail.com" type='text' className='text-[13px] font-poppins font-bold  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          
          </div>
          <div className='w-[46%] flex justify-end ml-10 flex-col'>
          <div className='pl-1 pr-1 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Phone Number</label>
            <input value="+251925881509" type='text' className='text-[13px] font-poppins font-bold  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-1 pr-1 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Kebele</label>
            <input value="05" type='text' className='text-[13px] font-poppins font-bold  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-1 pr-1 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>House Number</label>
            <input value="0013" type='text' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none  text-[13px] font-poppins font-bold'></input>
          </div>
         
        
          </div>
        </div>
          
           </form>
           <div className='w-full pl-3 mb-1 flex justify-between  mt-3 flex-row'>
           <button className='py-3 px-8 font-poppins font-semibold text-base bg-secondary text-white rounded'>BACK</button>
           <button className='py-3 px-8 font-poppins font-semibold text-base bg-primary text-white rounded'>UPDATE</button>
          </div>
      </InfoContiner>

    </div>

  )
}

export default ViewDetail