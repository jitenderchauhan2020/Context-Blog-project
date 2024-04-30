import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
    <div className='w-full bg-white mb-2 border-black shadow-md py-2'>
        <NavLink to="/" >
        <header className='text-center'>
            <h1 className='uppercase text-2xl font-bold' >DevJourney Blog</h1>
        </header>
        </NavLink>
    </div>
    )
}
