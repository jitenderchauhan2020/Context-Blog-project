import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//context step 1
//Creation
export const AppContext = createContext(); 

//context Step 2
// context provider 
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    //ye Api diffrent se aayengi
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate  = useNavigate();

    //data filling
    async function fetchBlogPost(page = 1, tag = null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`
        }
        try{
            const result = await fetch(url);
            const response = await result.json();
            setPage(response.page);
            setPosts(response.posts);
            setTotalPages(response.totalPages);
        }catch(error){
            console.log("Error found : Network fatt gaya");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        } 
        setLoading(false);
    }

    function pageChangeHandler(page){
        navigate({search : `?page=${page}`})
        setPage(page);
    }

    const value = {
        posts, 
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        pageChangeHandler,
        fetchBlogPost
    };  

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}