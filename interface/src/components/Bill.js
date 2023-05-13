/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { previousPayment } from '../constants';
import { arrow, down, up, view, water } from '../assets';
const ViewContiner = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-[90%] rounded  flex   flex-row mt-4 py-2 px-1
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
const Bill = () => {
  return (
    

    <div className='flex flex-col items-center mt-1 py-3 '>
            <ViewContiner >
                <div className='w-full flex flex-row '>
                <h1 className=' w-full flex justify-center font-poppins font-bold text-[15px] mt-3' >YOUR PAYMENT BILL INFORMATION</h1>
                </div>
               
            </ViewContiner>
    <InfoContiner className='mt-3'>
         <div className='w-full flex flex-col mt-5 '>
            <div className='flex flex-row justify-between w-full'>
              <div className='w-[60%] flex flex-row justify-between items-center'>
                <img className='w-[70px] h-[70px]' src='http://www.ethiopianelectricutility.gov.et/images/logo.png' />
             <div className='w-full  flex flex-col ml-2'>
                <h1 className='font-poppins font-semibold text-[13px]'>Ethiopian Electric Utility</h1>
                <p className='font-poppins font-normal text-[12px] mt-3'>Street Address :0015</p>
                <p className='font-poppins font-normal text-[12px] mt-1'>City :Addis Ababa Ethiopia </p>
                <p className='font-poppins font-normal text-[12px] mt-1'>Phone :+251 923456671</p>

             </div>
              </div>
              <div className='w-[40%] flex flex-col justify-between'>
                <h1 className='font-poppins font-semibold text-[13px] flex justify-end'>PAYMENT RECEIPT</h1>
                <p className='font-poppins font-normal text-[12px] flex justify-end'>DATE  :05/01/2015 EC</p>
                <p className='font-poppins font-normal text-[12px] flex justify-end'>RECEIPT #:01</p>

              </div>
            </div>
            <div className='w-full h-[3px] bg-blue-400 mt-6 rounded '> </div>
                <div className='w-full flex flex-row justify-between px-3 mt-2'>
                    <p className='font-poppins font-normal text-[14px]'>Bill To: Nuru Ahmed Ali</p>
                    <p className='font-poppins font-normal text-[14px]'>From :EUU </p>
                </div>

           <div className='w-full justify-center flex flex-col'>
           <h1 className='font-poppins font-semibold text-[14px] flex justify-center mt-4'>BILL INFORMATION</h1>
            <div className='w-full flex justify-start mt-4 flex-col'>
             <p className='font-poppins font-normal text-[14px]'>Utility Id : <span className='font-poppins font-normal text-[12px]'>1</span></p>
             <p className='font-poppins font-normal text-[14px]'>Discription: <span className='font-poppins font-normal text-[12px]'>Payed for electric utility</span> </p>
             <p className='font-poppins font-normal text-[14px]'>Sub-total Price: <span className='font-poppins font-normal text-[12px]'>500ETB</span> </p>
             <p className='font-poppins font-normal text-[14px]'>Total Price: <span className='font-poppins font-normal text-[12px]'>500ETB</span> </p>
            </div>
           </div>
           
           <div className='w-full flex justify-end items-end mt-3 flex-col'>
            <div className='w-full flex flex-row  justify-end items-center'>
                <p className='font-poppins font-normal text-[12px]'>Officer Name</p>
                <div className='w-[50%] h-[1px] bg-black mt-6 rounded '></div>
            </div>
            <div className='w-full flex flex-row  justify-end items-center'>
                <p className='font-poppins font-normal text-[12px]'>Sign</p>
                <div className='w-[50%] h-[1px] bg-black mt-6 rounded '></div>
            </div>
            </div>



            <div className='w-full pl-3 mb-1 flex justify-between items-center mt-5 flex-row'>
                <button className='py-3 px-8 font-poppins font-semibold text-sm  text-white rounded bg-primary'>Print</button>
                <button className='py-3 px-8 font-poppins font-semibold text-sm  text-white bg-secondary rounded'>Download</button>
            </div>
        </div>



    </InfoContiner>

</div>
  )
}

export default Bill