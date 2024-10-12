

import React, { useState } from 'react'

export default function ExerciseCard(props) {

    const [setsCompleted, setSetsCompleted] = useState(0);
    const {exercise, i} = props;

    function handleSetIncrement() {
        setSetsCompleted((setsCompleted + 1) % 6);
    }

  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
        <h4 className='text-3xl-hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
            0{i + 1}
        </h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>{exercise.name.replaceAll("_", " ")}</h2>
      </div>

      <div className='flex flex-col bg-slite-950 rounded gap-2'>
        {exercise.description.split('___').map((val) => {
            return (
                <div className='text-sm'>
                    {val}
                </div>
            )
        })}
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
        
        <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-emerald-900 hover:border-emerald-600 w-full duration-200'>
            <h3 className='text-slate-400 text-sm capitalize'>Items eaten</h3>
            <p className='font-medium'>{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  )
}
