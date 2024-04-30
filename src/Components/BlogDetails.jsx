import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => { 
    console.log(post);
    return (
    <div >
        <NavLink to={`/blog/${post.id}`}>
            <span className='font-bold text-l'>{post.title}</span>
        </NavLink>
        <p className='text-[12px]'>By <span className='italic'>{post.author} </span>on {" "} 
        <NavLink to={`/categories/${post.category.replaceAll(" ", ("-"))}`} >
            <span className='underline font-bold'>{post.category}</span>
        </NavLink>
        </p>
        <p className='text-[12px] pb-4'>Posted on {post.date}</p>
        <p className='text-[14px]'>{post.content}</p>
        <div className='gap-x-2 flex'>{
            post.tags.map((tag, index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} >
                    <span className='text-blue-500 underline font-bold text-xs cursor-pointer mt-[4px]'>{`#${tag} `}</span>
                </NavLink>
            ))}
        </div>
        {/* <div key={post.id}>
            <p className='font-bold text-l'>{post.title}</p>
            <p className='text-[12px]'>
                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category} </span>
            </p>
            <p className='text-[12px] pb-4'>
                Posted on {post.date}
            </p>
            <p className='text-[14px]'>{post.content } </p>
            <div className='gap-x-2 flex'>
                {post.tags.map((tag, index) => {
                    return <span key={index} className='text-blue-500 underline font-bold text-xs cursor-pointer mt-[4px]'>{`#${tag} `}</span>
                })}
            </div>
        </div> */}
    </div>
    )
}

export default BlogDetails