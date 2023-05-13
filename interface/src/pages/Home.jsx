import React from 'react'
import HomeLeft from '../components/HomeLeft'
import HomeRight from '../components/HomeRight'

const Home = () => {
  return (
    <div className='w-full md:pl-12 md:pr-12 mt-16'>
        <div className='w-full flex md:flex-row flex-col-reverse justify-between '>
            <HomeLeft />
            <HomeRight />
        </div>
        
    </div>
  )
}

export default Home