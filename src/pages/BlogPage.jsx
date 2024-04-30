import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../baseUrl';
import { Header } from '../Components/Header';
import BlogDetails from '../Components/BlogDetails';
import { Spinner } from '../Components/Spinner';

const BlogPage = () => {
    const newUrl = `https://codehelp-apis.vercel.app/api/`;
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const {setLoading, loading} = useContext(AppContext);
    const location = useLocation();
    const navigation = useNavigate();

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newUrl}get-blog?blogId=${blogId}`;
        console.log(url);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }catch(error){
            console.log("error aa gya jee");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

    return (    
        <div >
            <Header/>
            <div className='w-10/12 max-w-[700px] gap-x-5 items-center py-4 flex mx-auto'>
            <button className='border-2 rounded-sm px-4 py-1 border-gray-300' onClick={()=>navigation(-1)}>
                Back
            </button>
            </div>

            <div  className='w-10/12 max-w-[700px] items-center  py-3 flex flex-col gap-y-10  min-h-screen mx-auto'>
            {
                loading ? <div className='my-auto'><Spinner/></div> : (
                    blog ? (
                        <div >
                            <BlogDetails post={blog}/>
                            <h2 className='text-3xl font-bold mb-4 mt-8'>Related Blogs</h2>
                            <div className='w-10/12 max-w-[700px] items-center  py-3 flex flex-col gap-y-10 mb-[60px] min-h-screen'>{
                                relatedBlogs.map((post) =>(
                                    <div key={post.id}><BlogDetails  post={post} /></div>
                                ) )}
                            </div>
                            
                        </div>
                    ) : (<p>No post Found</p>)
                
                )
            }
            </div>
        </div>
    )   
}

export default BlogPage