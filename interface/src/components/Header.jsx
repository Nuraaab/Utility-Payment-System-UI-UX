import React, { useState } from 'react'
import tw from 'twin.macro';
import { ilogo } from '../assets';
import Hamburger from 'hamburger-react';
import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Search from './Search';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Login from './Login';
import Home from '../pages/Home';
import Register from './Register';
import HomePage from '../mainpage/HomePage';
import ViewDetail from './ViewDetail';
import Payment from './Payment';
import History from './History';
import Bill from './Bill';
import AddCustomer from './AddCustomer';
import ManageCustomer from './ManageCustomer';
import ViewPayment from './ViewPayment';


const HeaderContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
${tw`
w-full md:pl-12 md:pr-12 bg-white 
`};
`;

const Li = styled.li`
${tw`
text-xs md:text-base text-black mr-1 md:mr-[30px] cursor-pointer font-semibold font-poppins hover:text-red-400
`};
`;
const MLi = styled.li`
${tw`
text-sm text-white mr-1 cursor-pointer  hover:text-red-400 font-poppins font-medium mb-[5px]
`};
`;
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [login, setLogin] = useState(false);
    return (
        <BrowserRouter>
        <div className='w-full mb-2'>
            <HeaderContainer>
                <div className='flex flex-row justify-between md:min-h-[69px] min-h-[50px]'>
                    <div className='max-w-full flex flex-row justify-between '>
                        <div className='w-auto h-9 md:h-9 flex   mt-4'>
                            <img src={ilogo} className='w-auto h-[100%] cursor-pointer ' />
                        </div>
                        <div className='flex items-center ml-14 '>
                            <ul className='sm:flex hidden list-none'>
                                <Li><a>Home</a></Li>
                                <Li><a><Link to='/vpay'>Utility</Link></a></Li>
                                <Li><a><Link to='/history'>Service</Link></a></Li>
                                <Li><Link to='/add'>About</Link></Li>
                                <Li><Link to='/search'>Contact</Link></Li>

                            </ul>
                        </div>
                    </div>
                    <div className='sm:flex hidden flex-row justify-between items-center  min-w-[150px]'>
                        <Link to='/login' className='cursor-pointer font-semibold font-poppins hover:text-red-400 text-xs md:text-base text-white'>Login</Link>
                        <Link to='/manage' className='cursor-pointer font-semibold font-poppins hover:text-red-400 text-xs md:text-base text-black'>Logout</Link>
                    </div>

                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <Hamburger color='black' className='w-[28px] h-[28px] object-contain' toggle={setToggle} toggled={toggle} onToggle={() => setToggle(!toggle)} />
                        <div className={` ${!toggle ? "hidden" : "flex"}  bg-black-gradient w-full p-7 rounded-b-[10px] absolute top-16 right`}>
                            <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                                <MLi> <a href='#home'>Home</a></MLi>
                                <MLi> <a href='#service'><Link to='/vpay'>Service</Link></a></MLi>
                                <MLi> <Link to='/add'>About</Link></MLi>
                                <MLi><Link to='/bill'>Contact</Link></MLi>
                                <MLi><Link to='/search'>LogIn</Link></MLi>
                                <MLi>SignUp</MLi>
                            </ul>
                        </div>
                    </div>

                </div>
               
            </HeaderContainer>
            </div>
            <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/register' element={<Register />}> </Route>
                    <Route path='/login' element={<Login />}> </Route>
                    <Route path='/view' element={<ViewDetail />}></Route>
                    <Route path='/payment' element={<Payment />}></Route>
                    <Route path='/search' element={<Search />}></Route>
                    <Route path='/history' element={<History />}></Route>
                    <Route path='/bill' element={<Bill />}></Route>
                    <Route path='/add' element={<AddCustomer />}></Route>
                    <Route path='/manage' element={<ManageCustomer />}></Route>
                    <Route path='/vpay' element={<ViewPayment />}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default Header