import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Blogs } from '../Components/Blogs';

const TagPage = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
    <div>
        <Header/> 
        <div className='w-10/12 max-w-[700px] gap-x-5 items-center py-5 flex mx-auto'>
            <button  className='border-2 rounded-sm px-4 py-1 border-gray-300'
            onClick={()=> navigate(-1)} >Back</button>
            <p className='text-xl font-bold'>Blogs on <span className='font-bold underline text-blue-500'>{tag} </span></p> 
        </div>
        <Blogs/>
        <Footer/>
    </div>
    )
}

export default TagPage