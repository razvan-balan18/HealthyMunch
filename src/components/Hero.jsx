import React from 'react'
import Button from './Button';


export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Healthy&<span className='text-emerald-400'>Happy</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby aknowledge that I may become unbelievably <span className='text-emerald-400 font-medium'>fit</span> and accept all risks of becoming incredibly <span className='text-emerald-400 font-medium'>healthy</span></p>
      <Button func={() => {
                window.location.href= '#generate'
            }} text={"Accept & Begin"}></Button>
    </div>
  )
}
