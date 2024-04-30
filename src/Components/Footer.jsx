import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export const Footer = () => {
    const{page, pageChangeHandler, totalPages} = useContext(AppContext);
    return (
    <div className='w-full flex justify-center border-2 py-2 fixed bg-white bottom-0'>
        <div className='w-10/12 max-w-[700px] flex justify-between items-center'>

        <div className='flex gap-2'>
        {
                page > 1 &&
                (<button  className='border-2 rounded-sm px-4 py-1 border-gray-300' onClick={() => pageChangeHandler(page - 1)}>Previous</button>)
            }
            {
                page < totalPages &&
                (<button className='border-2 rounded-sm px-4 py-1 border-gray-300' onClick={() => pageChangeHandler(page + 1)} >Next</button>)
            }
        </div>
            
            {
                <p className='font-bold text-sm'>
                    Page {page} of {totalPages}
                </p>
            }
        </div>
    </div>
    )
}
