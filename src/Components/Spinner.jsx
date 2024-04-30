import React from 'react'
import './Spinner.css'

export const Spinner = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='dots'></div>
            <p className='font-bold text-2xl mt-8'>Loading</p>
        </div>
    )
}
