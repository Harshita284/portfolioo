'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Abt from '../../public/abt.webp';
import Sms from '@/components/Sms';
import MobileApp from '@/components/MobileApp';
import sdata from '@/app/data/sdata';
import mdata from '@/app/data/mdata';

const ITEMS_PER_PAGE = 3;


const categorizeItems = (items) => {
  const managementSystems = [];
  const websites = [];
  const businessSystems = [];
  const mobileApps = [];

  items.forEach(item => {
    if (["sms", "oms", "ams", "sbs", "ems", "ioms"].includes(item.id)) {
      managementSystems.push(item);
    } else if (["sc", "lks", "add", "genex", "beyond"].includes(item.id)) {
      websites.push(item);
    } else if (["ejuuz", "wavvy", "lms", "wdcb", "tms"].includes(item.id)) {
      businessSystems.push(item);
    }
  });

  mdata.forEach(item => {
    if (["ceo", "cga"].includes(item.id)) {
      mobileApps.push(item);
    }
  });

  return { managementSystems, websites, businessSystems, mobileApps };
};

export default function AboutUs() {
  const [currentCategory, setCurrentCategory] = useState('managementSystems');
  const [currentPage, setCurrentPage] = useState(1);
  const categorizedData = categorizeItems(sdata);
  const componentRefs = useRef({});

  const getPagedItems = (data) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const getTotalPages = (data) => Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleKeyClick = (id) => {
    let foundCategory = '';
    let foundPage = 1;

    Object.keys(categorizedData).forEach(category => {
      const index = categorizedData[category].findIndex(item => item.id === id);
      if (index !== -1) {
        foundCategory = category;
        foundPage = Math.floor(index / ITEMS_PER_PAGE) + 1;
      }
    });

    if (foundCategory) {
      setCurrentCategory(foundCategory);
      setCurrentPage(foundPage);

      setTimeout(() => {
        if (componentRefs.current[id]) {
          componentRefs.current[id].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  };

  const renderKeys = (category, title) => (
    <div className='flex flex-col items-center m-2'>
      <h3 className='font-bold text-lg text-black mb-2'>{title}</h3>
      <div className='flex flex-wrap gap-2 justify-center'>
        {categorizedData[category]?.map(item => (
          <button
            key={item.id}
            onClick={() => handleKeyClick(item.id)}
            className='px-3 py-1  rounded-full text-sm text-white hover:text-yellow-800 font-medium shadow transition'
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className='bg-gradient-to-r from-slate-300 to-slate-900 w-full min-h-screen'>

      <section className='w-full p-6 flex flex-col md:flex-row justify-between items-center gap-10 rounded-xl shadow-inner animate-fadeIn'>
        <div className='md:w-[60%] w-full space-y-5'>
          <h1 className='text-4xl font-extrabold text-black'>About Us</h1>
          <p className='text-gray-800 font-medium leading-relaxed text-base sm:text-lg tracking-wide'>
            At <strong>Code Dev</strong>, we are passionate about empowering businesses and individuals through cutting-edge technology solutions and comprehensive training programs. Founded by a team of tech enthusiasts, Code Dev has grown into a dynamic IT consulting and services firm, specializing in innovative software development, IT consulting, and Full Stack (MERN) development training.
            <br /><br />
            Our mission is to help businesses embrace digital transformation by providing customized solutions that align with their goals. From building scalable applications to optimizing workflows, we’re committed to delivering measurable results. We also invest in the future by training the next generation of developers through our hands-on coding programs.
          </p>
        </div>
        <div className='md:w-[35%] w-full'>
          <Image src={Abt} alt="About" className='w-full rounded-xl shadow-lg hover:scale-105 transition-all duration-500 object-cover' />
        </div>
      </section>


      <div className='bg-white py-6 shadow-inner mt-6 bg-gradient-to-r from-slate-300 to-slate-900'>
        <h2 className='text-2xl font-bold text-center mb-6'>Our Solutions</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {renderKeys('businessSystems', 'Business ')}
          {renderKeys('managementSystems', 'Management Systems')}
          {renderKeys('websites', 'Websites')}
          {renderKeys('mobileApps', 'Mobile Apps')}
        </div>
      </div>
      <div className='w-full h-auto px-4 py-6 sm:px-7 sm:py-7 bg-gradient-to-r from-slate-300 to-slate-900'>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-white text-center'>Our Portfolio</h1>
        <hr className='border-gray-400 my-4 mx-auto w-1/2' />
      </div>

      <div className='px-4 sm:px-8 py-10 space-y-8'>
        {getPagedItems(categorizedData[currentCategory] || []).map(item => (
          <div
            key={item.id}
            ref={el => (componentRefs.current[item.id] = el)}
            id={item.id}
            className='scroll-mt-24'
          >

            {currentCategory === 'mobileApps' ? (
              <MobileApp data={item} />
            ) : (
              <Sms data={item} />
            )}
          </div>
        ))}


        <div className='flex justify-center gap-2 mt-8'>
          {Array.from({ length: getTotalPages(categorizedData[currentCategory] || []) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-4 py-2 rounded-lg ${currentPage === idx + 1 ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-black'} transition-all font-semibold`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>


      <div className='w-full border-t-2 border-gray-400 p-4 text-center text-sm font-semibold text-white'>
        © 2025 Code Dev. All rights reserved.
      </div>
    </div>
  );
}
