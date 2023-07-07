'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import dashboard from '../icons/dashboard.svg'
import transactions from '../icons/transactions-white.svg'
import schedule from '../icons/schedule.svg'
import users from '../icons/user.svg'
import settings from '../icons/settings.svg'

export default function Navigator() {
    const [openNavigator, setOpenNavigator] = useState(false);

    return (
    <nav
        className=' fixed bottom-0 p-4 w-full box-border md:relative z-50'
    >
        <div className="mobile-nav md:hidden grid bg-black rounded-3xl text-white w-full p-8 box-border">
            <div 
                className={`flex justify-between items-center ${openNavigator?"mb-8":""}`}
                onClick={()=>setOpenNavigator(!openNavigator)}
            >
                <h2
                    className='text-2xl font-bold'
                >Board.</h2>
                {openNavigator?<AiOutlineClose/>:<RxHamburgerMenu/>}
            </div>
            {openNavigator && (<div
                className='grid gap-4 text-base font-thin'
            >
                <div className=" font-normal"><Image src={dashboard} alt="icon" className=' w-[1rem] inline-block mr-4'/>Dashboard</div>
                <div className=""><Image src={transactions} alt="icon" className=' w-[1rem] inline-block mr-4'/>Transactions</div>
                <div className=""><Image src={schedule} alt="icon" className=' w-[1rem] inline-block mr-4'/>Schedules</div>
                <div className=""><Image src={users} alt="icon" className=' w-[1rem] inline-block mr-4'/>Users</div>
                <div className=""><Image src={settings} alt="icon" className=' w-[1rem] inline-block mr-4'/>Settings</div>
                <div className="my-2 text-xs font-thin grid gap-2">
                    <span>Help</span>
                    <span>Contact us</span>
                </div>
            </div>)}
        </div>
        <div className="desktop-nav rounded-3xl bg-black text-white hidden md:block p-12 h-full relative">
            <h2
                className='text-3xl font-bold mb-8'
            >Board.</h2>
            <div
                className='grid gap-4 text-base font-thin'
            >
                <div className=" font-normal"><Image src={dashboard} alt="icon" className=' w-[1rem] inline-block mr-4'/>Dashboard</div>
                <div className=""><Image src={transactions} alt="icon" className=' w-[1rem] inline-block mr-4'/>Transactions</div>
                <div className=""><Image src={schedule} alt="icon" className=' w-[1rem] inline-block mr-4'/>Schedules</div>
                <div className=""><Image src={users} alt="icon" className=' w-[1rem] inline-block mr-4'/>Users</div>
                <div className=""><Image src={settings} alt="icon" className=' w-[1rem] inline-block mr-4'/>Settings</div>
            </div>
            <div className="absolute bottom-8 grid gap-1 mb-4 text-xs font-thin">
                <span>Help</span>
                <span>Contact us</span>
            </div>
        </div>
    </nav>
    )
}
