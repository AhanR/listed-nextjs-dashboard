import React from 'react'
import Navigator from './navigator';
import Status from './status';

export default function Layout(
    { children, } : { children : React.ReactNode }
) {
  return (
    <section
        className=' box-border w-full min-h-screen grid md:grid-cols-4 bg-[#F5F5F5] grid-cols-1 gap-4'
    >
      <Navigator/>
      <div className="content md:col-span-3 col-span-1">
        <Status/>
        {children}
      </div>
    </section>
  )
}
