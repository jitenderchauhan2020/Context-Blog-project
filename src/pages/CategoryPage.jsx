import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../Components/Header';
import { Blogs } from '../Components/Blogs';
import { Footer } from '../Components/Footer';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
    <div >
        <Header/>
        <div  className='w-10/12 max-w-[700px] gap-x-5 items-center py-5 flex mx-auto '>
            <button className='border-2 rounded-sm px-4 py-1 border-gray-300' onClick={() => navigation(-1)} >
                Back
            </button>
            <h2 className='text-xl font-bold'>Blogs on <span className='font-bold underline text-blue-500'>{category}</span></h2>
        </div>
        <Blogs/>
        <Footer/>
    </div>
    )
}

export default CategoryPage