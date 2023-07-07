'use client'
import React from 'react';
import Image from 'next/image';
import bellIcon from '../icons/bell.svg';

export default function Status() {
  return (
    <div
        className=' w-full flex justify-between p-4 flex-wrap'
    >
        <h3
            className=' font-bold text-xl my-4'
        >Dashboard</h3>
        <div className="detail flex flex-row items-center">
            <input 
                className=' border-none bg-white placeholder:text-[#B0B0B0] py-1 px-4 rounded-lg mr-2 text-sm items-center'
                type="search" name="search" id="search" placeholder='Search...'/>
            <Image
                className='mx-2'
                src={bellIcon}
                alt='Bell Icon'
            />
            <div className="profile rounded-full w-[1.5rem] h-[1.5rem] bg-green-500 ml-2">
                { }
            </div>
        </div>
    </div>
  )
}