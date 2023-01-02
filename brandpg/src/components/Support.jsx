import React from 'react';
import sptImg from '../assets/support.jpg';
import {BsTelephone, BsArrowRightShort} from 'react-icons/bs'
import {CgSupport} from 'react-icons/cg';
import {HiChip} from 'react-icons/hi';

function Support() {
  return (
    <div className='w-full  mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={sptImg} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='pt-8 text-slate-300 text-center text-3xl'>SUPPORT</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat consequatur porro unde, quia voluptates qui saepe delectus explicabo asperiores aliquam dolor commodi minima accusamus pariatur.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <BsTelephone className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellat earum, animi non accusamus iusto ab eos quaerat quod corporis nulla quasi unde voluptates, reiciendis doloremque. Assumenda sit nam sapiente!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRightShort className=' w-4 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <CgSupport className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellat earum, animi non accusamus iusto ab eos quaerat quod corporis nulla quasi unde voluptates, reiciendis doloremque. Assumenda sit nam sapiente!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRightShort className=' w-4 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiChip className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellat earum, animi non accusamus iusto ab eos quaerat quod corporis nulla quasi unde voluptates, reiciendis doloremque. Assumenda sit nam sapiente!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRightShort className=' w-4 ml-2'/></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Support