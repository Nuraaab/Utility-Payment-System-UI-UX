/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { previousPayment } from '../constants';
import { arrow, down, up, view, water } from '../assets';
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

const DropContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-full rounded px-2 flex justify-evenly items-center flex-row py-3
`};
`;

const History = () => {
    return (


        <div className='flex flex-col items-center mt-5 py-3 '>

            <InfoContiner className='mt-0'>
                <h1 className='flex justify-center font-poppins font-bold text-[15px] mt-3' >PREVIOUS PAYMENT INFORMATION</h1>


                <div className='w-full flex flex-col mt-5 '>
                    <div className='pl-1 pr-1 mb-1 '>
                    </div>
                    <ViewContiner >
                        <div className='w-full flex flex-row items-center'>
                            <img className='w-[20px] h-[20px]' src='http://www.ethiopianelectricutility.gov.et/images/logo.png' />
                            <p className='font-poppins font-normal text-[13px] ml-1 '> Ethiopian Electric Utility payment </p>
                            <span className='font-poppins font-normal text-[10px] ml-2 '>05/01/2015 EC</span>
                        </div>
                        <img className='w-[20px] h-10px]' src={up} />
                    </ViewContiner>
                    <ViewContiner >
                        <div className='w-full flex flex-row items-center'>
                            <img className='w-[20px] h-[20px]' src={water} />
                            <p className='font-poppins font-normal text-[13px] ml-1 '> Ethiopian Water Utility payment </p>
                            <span className='font-poppins font-normal text-[10px] ml-2 '>05/01/2015 EC</span>
                        </div>
                        <img className='w-[20px] h-10px]' src={up} />
                    </ViewContiner>
                    <ViewContiner >
                        <div className='w-full flex flex-row items-center'>
                            <img className='w-[20px] h-[20px]' src='http://www.ethiopianelectricutility.gov.et/images/logo.png' />
                            <p className='font-poppins font-normal text-[13px] ml-1 '> Ethiopian Electric Utility payment </p>
                            <span className='font-poppins font-normal text-[10px] ml-2 '>13/02/2014 EC</span>
                        </div>
                        <img className='w-[20px] h-10px]' src={up} />
                    </ViewContiner>
                    <ViewContiner >
                        <div className='w-full flex flex-row items-center'>
                            <img className='w-[60px] h-[20px]' src='https://www.ethiotelecom.et/wp-content/uploads/2021/04/cropped-Ethiotelcom_Logo-01-1-1536x423.png' />
                            <p className='font-poppins font-normal text-[13px] ml-1 '> Ethiopian Telecom Utility payment </p>

                        </div>
                        <img className='w-[20px] h-10px]' src={down} />
                    </ViewContiner>

                    <DropContiner >
                        <div className='flex flex-col w-[49%]'>
                            <p className='font-poppins font-medium text-[13px]'>Full Name</p>
                            <p className='font-poppins font-medium text-[13px] mt-1'>Service Type</p>
                            <p className='font-poppins font-medium text-[13px] mt-1'>Transaction Date</p>
                            <p className='font-poppins font-medium text-[13px] mt-1'>Payment Amount</p>
                            <p className='font-poppins font-medium text-[13px] mt-1'>Payment Methods</p>
                            <p className='font-poppins font-medium text-[13px] mt-1'>Payment Status</p>
                        </div>
                        <div className='flex flex-col w-[49%]'>
                            <p className='font-poppins font-normal text-[13px]'>Nuru Ahmed Ali</p>
                            <p className='font-poppins font-normal text-[13px] mt-1'>Telecom WIFI</p>
                            <p className='font-poppins font-normal text-[13px] mt-1'>05/01/2015 EC</p>
                            <p className='font-poppins font-normal text-[13px] mt-1'>500ETB</p>
                            <p className='font-poppins font-normal text-[13px] mt-1'>Yene Pay</p>
                            <p className='font-poppins font-normal text-[13px] mt-1'>Sucessfull</p>
                        </div>

                        <div>

                        </div>
                    </DropContiner>



                    <div className='w-full pl-3 mb-1 flex justify-center items-center mt-5 flex-row'>
                        <button className='py-3 px-1 font-poppins font-semibold text-sm  text-primary rounded'>More</button>
                        <img className='w-[20px] h-[10px]' src={arrow} />
                    </div>
                </div>



            </InfoContiner>

        </div>
    )
}

export default History