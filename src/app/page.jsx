'use client';
import React, { useState, useRef } from 'react';
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

  const scrollToTop = () => {
    const topElement = document.getElementById('portfolio-top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderKeys = (category, title) => (
    <div className="flex flex-col items-center m-4">
      <h3 className="font-semibold text-xl text-white mb-4 rounded-lg p-1 shadow-md">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {categorizedData[category]?.map(item => (
          <button
            key={item.id}
            onClick={() => handleKeyClick(item.id)}
            className="px-5 py-2 rounded-full text-sm text-white border hover:bg-yellow-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-800 transition ease-in-out duration-200 shadow-md"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-900 w-full min-h-screen'>
      <section className='w-full p-6 flex flex-col md:flex-row justify-between items-center gap-10 rounded-xl shadow animate-fadeIn border-b border-white'>
        <div className='md:w-[60%] w-full space-y-5'>
          <h1 className='text-4xl font-extrabold text-white transition-all duration-500 hover:text-purple-600'>
            About Us
          </h1>
          <p className='text-white font-medium leading-relaxed text-base sm:text-lg tracking-wide transition-all duration-500 hover:text-white'>
          At <strong>Code Dev</strong>, we are passionate about empowering businesses and individuals through cutting-edge technology solutions and comprehensive training programs. Founded by a team of tech enthusiasts, Code Dev has grown into a dynamic IT consulting and services firm, specializing in innovative software development, IT consulting, and Full Stack (MERN) development training.
            <br /><br />
            Our mission is to help businesses embrace digital transformation by providing customized solutions that align with their goals. From building scalable applications to optimizing workflows, we’re committed to delivering measurable results. We also invest in the future by training the next generation of developers through our hands-on coding programs.
          </p>
        </div>
        <div className='md:w-[35%] w-full'>
          <Image
            src={Abt}
            alt="About"
            className='w-full rounded-xl shadow-lg hover:scale-105 transition-all duration-500 object-cover'
          />
        </div>
      </section>

      <div className='star-background py-6 mt-6 bg-gradient-to-r from-slate-900 to-slate-900 shadow'>
        <h2 className='text-3xl font-extrabold text-center mb-6 text-yellow-800'>Our Solutions</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {renderKeys('businessSystems', 'Business Systems')}
          {renderKeys('managementSystems', 'Management Systems')}
          {renderKeys('websites', 'Websites')}
          {renderKeys('mobileApps', 'Mobile Apps')}
        </div>
      </div>

      
      <div id="portfolio-top" className='m-4 w-full max-w-[1500px] h-[100px] p-3'>
        <h1 className='text-3xl sm:text-2xl text-yellow-800 font-extrabold text-center'>
          Our Portfolio
        </h1>
        <hr className='text-white m-5' />
      </div>

      <div className='w-full max-w-[800px] p-3 mx-auto rounded-lg shadow-md'>
        <div className="flex flex-wrap justify-start items-center space-x-4">
          <button
            onClick={() => setCurrentCategory('all')}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${currentCategory === 'all' ? 'bg-yellow-800 text-white shadow-md' : 'text-gray-200'}`}
          >
            All
          </button>
          {['businessSystems', 'managementSystems', 'websites', 'mobileApps'].map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentPage(1);
                setTimeout(scrollToTop, 300);
              }}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${currentCategory === category ? 'bg-yellow-800 text-white shadow-md' : 'text-gray-200'}`}
            >
              {category.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className='px-4 sm:px-8 py-10 space-y-8'>
        {(currentCategory === 'all'
          ? categorizedData.managementSystems.concat(categorizedData.businessSystems, categorizedData.websites)
          : categorizedData[currentCategory] || []
        )
          .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
          .map(item => (
            <div
              key={item.id}
              ref={el => (componentRefs.current[item.id] = el)}
              id={item.id}
              className={`scroll-mt-24 ${currentCategory === 'mobileApps' ? 'mobile-app-style' : 'sms-style'}`}
            >
              {currentCategory === 'mobileApps' ? <MobileApp data={item} /> : <Sms data={item} />}
            </div>
          ))}

        
        <div className='flex justify-center gap-2 mt-8'>
          {Array.from({
            length: getTotalPages(
              currentCategory === 'all'
                ? categorizedData.managementSystems.concat(categorizedData.businessSystems, categorizedData.websites)
                : categorizedData[currentCategory] || []
            )
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentPage(idx + 1);
                setTimeout(scrollToTop, 300);
              }}
              className={`px-4 py-2 rounded-lg ${currentPage === idx + 1 ? 'bg-yellow-800 text-white' : 'bg-gray-300 text-black'} transition-all font-semibold`}
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
