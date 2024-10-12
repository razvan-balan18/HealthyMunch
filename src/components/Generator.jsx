
import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier';
import { SCHEMES } from '../utils/swoldier';
import Button from './Button';

function Header(props) {

    const { index, title, description } = props;

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-300'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {

    const{muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props;
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup) {

        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup));
            return;
        }

        if (muscles.length > 2) {
            return;
        }

        if (poison !== 'vegan') {
            setMuscles([muscleGroup]);
            setShowModal(false);
            return;
        }

        setMuscles([...muscles, muscleGroup]);
        if (muscles.length === 2) {
            setShowModal(false)
        }
    }

    return (
        <SectionWrapper id={'generate'} header={"generate your diet"} title={['It\'s', 'Healthy', 'o\'clock']}>

            <Header index={'01'} title={'Pick your type of diet'} description={'Select the type of diet which matches your preferences'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>{Object.keys(WORKOUTS).map((type, typeIndex) => {
                return (
                    <button onClick={() => {
                        setMuscles([]);
                        setPoison(type);
                    }} className={'bg-slate-950 px-4 border duration-200 hover:border-emerald-600 py-3 rounded-lg' + (type === poison ? ' border-emerald-600 ' : '  border-emerald-300 ')} key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
                    </button>
                )
            })}
            </div>

            <Header index={'02'} title={'Choose you favorites'} description={'Select you favorite products'} />
            <div className='bg-slate-950 border border-solid border-emerald-300 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>{muscles.length == 0 ? 'Select items' : muscles.join(' ')}</p>
                    <i className="fa-solid fa-sort-down absolute right-3 top-1/2 -translate-y-1/2 fa-carret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col p-3'>
                        {(poison === 'vegan' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => { updateMuscles(muscleGroup) }} key={muscleGroupIndex} className={'hover:text-emerald-300 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-emerald-300' : '')}>
                                    <p className='uppercase '>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            <Header index={'03'} title={'Become the fittest'} description={'Select your objective'} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return (
                    <button onClick={() => {
                        setGoal(scheme);
                    }} className={'bg-slate-950 px-2 border duration-200 hover:border-emerald-600 py-3 rounded-lg' + (scheme === goal ? ' border-emerald-600 ' : '  border-emerald-300 ')} key={schemeIndex}>
                        <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
                    </button>
                )
            })}
            </div>
            <Button func={updateWorkout} text={"Create diet"}></Button>
        </SectionWrapper>
        
    )
}
