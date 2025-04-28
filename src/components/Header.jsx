import React from 'react';
import Image from 'next/image';
import Logo from '../../public/White-CodeDev-new.png';

export default function Header() {
  return (
    <div className='w-full h-[70px] bg-gradient-to-r from-slate-900 to-slate-900 p-2 border-b border-gray-300'>
      <header className='max-w-[1500px] h-full mx-auto flex items-center justify-end px-4'>
        <div className='w-[150px] h-full'>
          <Image
            src={Logo}
            alt="Logo"
            className='w-full h-[70px] object-contain'
            priority
          />
        </div>
      </header>
    </div>
  );
}
