import React from 'react'

const HomeLeft = () => {
  return (
    <div className=' flex flex-col max-w-full md:max-w-[47%] ml-4 md:mt-7 mt-5 items-center md:items-start pl-4 md:pl-0 pr-4 md:pr-0'>
      <h1 className='md:max-w-[300px] text-sm md:text-[30px] leading-[28px] font-poppins font-bold flex justify-center'>Pay For Your Utility Bill Online From Anywhere.</h1>
      <p className='font-poppins font-normal text-[15px] leading-[27px] md:text-base mt-[15px] md:mt-[20px] md:max-w-[350px]'>With no need of going anywhere you can pay for your elctricity, water, wifi, and other utilities using your mobile phone or personal compurter.</p>
      <div className='flex flex-row justify-center items-center mt-[35px]'>
        <button className='py-4 px-8 font-poppins font-semibold text-sm md:text-base bg-primary rounded-[5px] text-white cursor-pointer'>Get Started</button>
        
      </div>
    </div>
  )
}

export default HomeLeft