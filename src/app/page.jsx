'use client';
import React from 'react';
import Image from 'next/image';
import Abt from '../../public/abt.webp';
import Sms from '@/components/Sms';
import MobileApp from '@/components/MobileApp';
import sdata from '@/app/data/sdata';
import mdata from '@/app/data/mdata';

export default function AboutUs() {
  return (
    <div className='bg-gradient-to-r from-slate-300 to-slate-900 w-full'>

      <section className='w-full p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-10 rounded-xl shadow-inner animate-fadeIn'>
        <div className='md:w-[60%] w-full space-y-5'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-black'>About Us</h1>
          <p className='text-gray-800 font-medium leading-relaxed text-base sm:text-lg tracking-wide'>
            At <strong>Code Dev</strong>, we are passionate about empowering businesses and individuals through cutting-edge technology solutions and comprehensive training programs. Founded by a team of tech enthusiasts, Code Dev has grown into a dynamic IT consulting and services firm, specializing in innovative software development, IT consulting, and Full Stack (MERN) development training.
            <br /><br />
            Our mission is to help businesses embrace digital transformation by providing customized solutions that align with their goals. From building scalable applications to optimizing workflows, we’re committed to delivering measurable results. We also invest in the future by training the next generation of developers through our hands-on coding programs.
          </p>
        </div>
        <div className='md:w-[35%] w-full'>
          <Image
            src={Abt}
            alt="About"
            className='w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-all duration-500 object-cover'
          />
        </div>
      </section>

      <div className='top-0 z-10 shadow-inner'>
        <div className='flex flex-wrap gap-3 sm:gap-4 px-4 sm:px-7 py-4 justify-center'>
          {sdata.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className='bg-gradient-to-r from-slate-200 to-slate-300 text-black font-semibold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-slate-300 transition duration-300 text-sm sm:text-base'
            >
              {item.title}
            </a>
          ))}
          {mdata.map((item1) => (
            <a
              key={item1.id}
              href={`#${item1.id}`}
              className='bg-gradient-to-r from-slate-200 to-slate-300 text-black font-semibold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-slate-300 transition duration-300 text-sm sm:text-base'
            >
              {item1.title}
            </a>
          ))}
        </div>
      </div>

      <div className='w-full h-auto px-4 py-6 sm:px-7 sm:py-7 bg-gradient-to-r from-slate-300 to-slate-900'>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-white text-center'>Our Portfolio</h1>
        <hr className='border-gray-400 my-4 mx-auto w-1/2' />
      </div>

      <div className='w-full space-y-10 px-4 sm:px-5 pb-10'>
        {sdata.map((dataItem) => (
          <div key={dataItem.id} id={dataItem.id} className='scroll-mt-28'>
            <Sms data={dataItem} />
          </div>
        ))}
      </div>

      <div className='w-full space-y-10 px-4 sm:px-5 pb-10'>
        {mdata.map((mdataItem) => (
          <div key={mdataItem.id} id={mdataItem.id} className='scroll-mt-28'>
            <MobileApp data={mdataItem} />
          </div>
        ))}
      </div>

      <div className='w-full border-t-2 border-gray-300 mt-10 p-4 sm:p-5'>
        <p className='text-center text-white font-semibold text-sm sm:text-base'>© 2023 Code Dev. All rights reserved.</p>
        <p className='text-center text-white font-semibold text-sm sm:text-base'>Designed by Code Dev Team</p>
      </div>
    </div>
  );
}
