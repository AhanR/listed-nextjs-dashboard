import React from 'react'
import Image from 'next/image';

export default function Card(
    { icon, title, number, className } : { icon : any, title : String, number : String, className : String }
) {
  return (
    <div
        className={`rounded-3xl p-4 ${className}`}
    >
        <div className="w-full flex justify-end flex-row mb-2"><Image className="h-[1.5rem]" src={icon} alt={"icon"}/></div>
        <div className="text-sm mb-2">{title}</div>
        <div className="text-3xl font-bold break-words mb-2">{""+number}</div>
    </div>
  )
}