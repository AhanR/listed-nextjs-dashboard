/* eslint react/no-unescaped-entities */
import React, { useState } from 'react'
import Card from './components/card';
import revenue from '../icons/revenue.svg'
import transactions from "../icons/transactions.svg"
import likes from "../icons/like.svg"
import users from "../icons/users.svg"
import ActivityChart from './components/activity-chart';
import ProductChart from './components/product-chart';

export default async function Dashboard() {

  // const locParams = "lat=40.7127837&lon=-74.0059413";
  // const weatherDataRaw = await fetch("https://www.amdoren.com/api/weather.php?api_key="+process.env.API_KEY+"&"+locParams);
  // const weatherDataJson = await weatherDataRaw.json();
  // const data = weatherDataJson["forecast"];

  const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

  const dataLine = [
      {
        "date" : '23-12-2002',
        "min_f" : 100,
        "avg_f" : 101
      },
      {
        "date" : '24-12-2002',
        "min_f" : 110,
        "avg_f" : 101
      },
      {
        "date" : '25-12-2002',
        "min_f" : 103,
        "avg_f" : 101
      },
      {
        "date" : '26-12-2002',
        "min_f" : 90,
        "avg_f" : 101
      },
  ];

  const dataPie = [
    {
      "title" : "Basic Tees",
      "amt" : 55
    },
    {
      "title" : "Custom Short Pants",
      "amt" : 31
    },
    {
      "title" : "Super Hoodies",
      "amt" : 14
    },
  ];

  const dataTasks = [
    {
      "title" : "Meeting with suppliers from Kuta Bali",
      "time" : "18.00-20.00",
      "loc" : "Sunset Road, Kuta, Bali",
      "col" : "#9BDD7C"
    },
    {
      "title" : "Check operation at Giga Factory 1",
      "time" : "14.00-15.00",
      "loc" : "Central Jakarta",
      "col" : "#6972C3"
    },
  ]

  return (
    <div
      className='grid grid-cols-4 gap-4 box-border p-4'
    >
      <Card
        className={"bg-[#DDEFE0] md:col-span-1 col-span-2"}
        title={"Total Revenues"}
        number={"$2,129,430"}
        icon = {revenue}
      />
      <Card
        className={"bg-[#F4ECDD] md:col-span-1 col-span-2"}
        title={"Total Transactions"}
        number={"1,520"}
        icon = {transactions}
      />
      <Card
        className={"bg-[#EFDADA] md:col-span-1 col-span-2"}
        title={"Total Likes"}
        number={"9,721"}
        icon = {likes}
      />
      <Card
        className={"bg-[#DEE0EF] md:col-span-1 col-span-2"}
        title={"Total Users"}
        number={"892"}
        icon = {users}
      />
      <div className="col-span-4 box-border p-8 rounded-2xl bg-white">
        <div className=" flex justify-between md:flex-row flex-col">
          <div className="m-2">
            <h2
              className=' text-xl font-bold'
            >
              Activities
            </h2>
          <div className="text-slate-400 font-light text-sm">Options</div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className=" flex flex-row items-center">
              <div
                className=' bg-[#E9A0A0] rounded-full w-2 h-2 inline-block m-2'
              >{" "}</div>
              <span>Guest</span></div>
            <div className=" flex flex-row items-center">
              <div
                className=' bg-[#9BDD7C] rounded-full w-2 h-2 inline-block m-2'
              >{" "}</div>
              <span>User</span></div>
          </div>
        </div>
        <ActivityChart
          data={dataLine}
          className={"mt-2"}
        />
      </div>
      <div className="md:col-span-2 col-span-4 rounded-2xl bg-white p-4 grid grid-cols-2 gap-4">
        <div className="col-span-2 flex justify-between p-4 items-center">
          <h2
            className='font-bold text-xl'
          >Top Products</h2>
          <div className="text-slate-400 font-light text-sm">Options</div>
        </div>
        <ProductChart
          colours={COLORS}
          className={"md:col-span-1 col-span-2 md:mb-0 mb-4"}
          data={dataPie}
        />
        <div className="grid gap-2 md:col-span-1 col-span-2 mx-4 md:mx-0">
          {dataPie.map((d:any, index: number)=>(<div className='flex'key={"piedata"+index}>
            <div className={`w-4 h-4 rounded-full m-1`} style={{ backgroundColor : COLORS[index % COLORS.length] }}>{" "}</div>
            <div className="">
              <h3 className=' font-bold p-0' >{d["title"]}</h3>
              <span className=' text-stone-500 text-sm'>{d["amt"]}%</span>
            </div>
          </div>))}
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 rounded-2xl bg-white">
        <div className="p-8 flex justify-between items-center">
          <h3
            className='text-xl font-bold'
          >Today's Schedule</h3>
          <div className="text-slate-400 font-light text-sm">See all {">"}</div>
        </div>
        <div className="px-8 pb-8 pt-0">
          {dataTasks.map((d, index)=>(<div key={"taskdata"+index}
            className={` border-l-[5px] py-1 px-4 grid my-4 gap-1`}
            style={{ borderColor : d["col"] }}
          >
            <h2
              className=' text-[#666666] font-bold'
            >{d["title"]}</h2>
            <span
              className='text-[#999999] text-sm'
            >{d["time"]}</span>
            <span
              className='text-[#999999] text-sm'
            >at {d["loc"]}</span>
          </div>))}
        </div>
      </div>
      <span className='col-span-4 text-xs text-slate-400 p-2'>
        Note: The API called has run out of monthly calls, please try again later
      </span>
      <div className="text-3xl h-[6rem] w-full md:hidden col-span-4">{""}</div>
    </div>
  )
}
