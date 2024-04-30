import React from 'react'
import { Blogs } from '../Components/Blogs';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

const Home = () => {
    return (
    <div >
        <Header/>
        <Blogs/>
        <Footer/>
    </div>
    )
}

export default Home