import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { close } from '../assets';
import Switch from "react-switch";
/** @jsxImportSource @emotion/react */

const Container =styled.div`
${tw`
w-full  flex items-center justify-center mb-8
`}
`
const LoginContainer = styled.div`
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
${tw`
md:w-[40%] flex mt-0 bg-white rounded pb-1 flex-col w-full  mx-5
`};
`;

const Login = () => {
  const [toggle, setToggle] = useState(false);
 const toggleHandller = ()=>{
setToggle(!toggle);
 }
  return (
    <Container>
    <LoginContainer  >
      {/* <img className='h-[40px] w-[40px] flex justify-end md:mb-[10px] cursor-pointer md:absolute right-[405px] top-25 ' /> */}
        <div>
          <h1 className='flex justify-center font-poppins font-bold text-[16px] md:text-[23px] mt-2'>SIGNUP FOR NEW ACCOUNT</h1>
        </div>
        <form className='flex flex-col mt-[20px]'>
          <div className='pl-5 pr-5 mb-1 '>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>First Name</label>
            <input type='text' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-5 pr-5 mb-1 '>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Last Name</label>
            <input type='text' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-5 pr-5 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Email Address</label>
            <input type='text' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-5 pr-5 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Phone Number</label>
            <input type='text' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-5 pr-5 mb-1 flex flex-row justify-between w-full mt-3'>
            <h1 className='font-poppins font-semibold text-[15px] text-black'>Service User</h1>
          <Switch onColor='#080' offColor='#035' checkedIcon uncheckedIcon onChange={()=>toggleHandller()} checked={toggle} />
            <h1 className='font-poppins font-semibold text-[15px] text-black pl-8 pr-8'>Service Provider</h1>
          </div>
          <div className='pl-5 pr-5 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Kebele</label>
            <input type='text' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-5 pr-5 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>House Number</label>
            <input type='text' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none '></input>
          </div>
          <div className='pl-5 pr-5 mb-1'>
            <label className=' text-black  text-[13px] font-poppins font-bold flex justify-start'>Profile Image</label>
            <input type='file' className='  p-2 w-full bg-transparent border-b-2  border-b-gray-500 focus:outline-none  text-black  text-[13px] font-poppins font-bold'></input>
          </div>
          <div className='pl-5 pr-5 mb-1 flex justify-between items-center mt-1 flex-row'>
            <p className=' text-black  text-[13px] font-poppins font-bold flex justify-start cursor-pointer hover:text-blue-600'><a>Alrady Registered ?/Login</a></p>
           <button className='py-4 px-9 font-poppins font-semibold text-base bg-black text-white rounded'>SIGNUP</button>
          </div>
        </form>

    </LoginContainer>
    </Container>
  )
}

export default Login