import React from 'react'

const Footer = () => {
  return (
    <><div className='flex 
justify-center 
text-2xl 
bg-slate-100 
rounded-t-full
px-4 
pt-3 
pb-1 
tablet:text-[1.7rem]
tablet:justify-start 
md:px-20 
dark:bg-midnight
dark:text-slate-200'><h1 className='text-slate-800'>© {new Date().getFullYear()} Osama Shaikh</h1></div></>
  )
}

export default Footer