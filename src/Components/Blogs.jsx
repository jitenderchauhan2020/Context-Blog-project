import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Spinner } from './Spinner';
import BlogDetails from '../Components/BlogDetails'

export const Blogs = () => {
    const {posts, loading} = useContext(AppContext);

    return (
    <div className='w-10/12 max-w-[700px] items-center  py-3 flex flex-col gap-y-10 mb-[60px] min-h-screen mx-auto'> 
        {
            loading ? (<div className='my-auto'><Spinner/></div>) : (
                posts.length === 0 ? (
                    <div>No Post Found</div>
                ) : (
                    posts.map((post) => (
                        <BlogDetails key={post.id} post={post} />
                    ))
                )
            )
        }
    </div>
    )
}
