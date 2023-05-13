/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { arrow, view } from '../assets';
const ViewContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-full rounded  flex justify-between  flex-row mt-4 py-2 px-1
`};
`;
const InfoContiner = styled.div`
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
${tw`
w-[90%] rounded px-5 flex justify-evenly items-center flex-col py-6
`};
`;

const Search = () => {
    return (

        <div className='flex flex-col items-center mt-5 py-3 '>

            <InfoContiner className='mt-10'>
                <h1 className='flex justify-center font-poppins font-bold text-[15px] mt-3' >SEARCH FOR UTILITIES</h1>


                <div className='w-full flex flex-col '>
                    <div className='pl-1 pr-1 mb-1 '>

                        <input value="utilities" type='text' className='text-[13px] font-poppins font-bold px-4 p-2 w-full bg-transparent border-2  cursor-pointer border-gray-300 focus:outline-none rounded-[50px] mt-1'>
                        </input>
                    </div>
                    <ViewContiner >
                        <p className='font-poppins font-normal text-[13px] '>Ethiopian Electric <span className='text-secondary'>Utilit</span>y </p>
                        <img className='w-[20px] h-10px]' src={view} />
                    </ViewContiner>
                    <ViewContiner >
                        <p className='font-poppins font-normal text-[13px] '>Ethiopian Water <span className='text-secondary'>Utilit</span>y </p>
                        <img className='w-[20px] h-10px]' src={view} />
                    </ViewContiner>
                    <ViewContiner >
                        <p className='font-poppins font-normal text-[13px] '>Ethiopian Telecom <span className='text-secondary'>Utilit</span>y </p>
                        <img className='w-[20px] h-10px]' src={view} />
                    </ViewContiner>
                    <ViewContiner >
                        <p className='font-poppins font-normal text-[13px] '>Ethiopian Natural Gas <span className='text-secondary'>Utilit</span>y </p>
                        <img className='w-[20px] h-10px]' src={view} />
                    </ViewContiner>
                    <div className='w-full pl-3 mb-1 flex justify-center items-center mt-5 flex-row'>
                        <button className='py-3 px-1 font-poppins font-semibold text-sm  text-primary rounded'>More</button>
                        <img className='w-[20px] h-[10px]' src={arrow}/>
                    </div>
                </div>



            </InfoContiner>

        </div>
    )
}

export default Search