import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBlogs } from '@/store/blog/blog.action'
import Link from 'next/link'
export default function Blog() {
    
    const dispatch = useDispatch()
    const blogsList = useSelector(state => state.blogStore)
    const {loading, error, blogs} = blogsList

    useEffect(() => {
        dispatch(getBlogs()) 
      }, [dispatch])
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
             {blogs.map((post) => (
                <Link key={post.id} href={`/product/${encodeURIComponent(post.id)}`} className="flex flex-col bg-white rounded-xl shadow p-2 items-center">
                    <div> 
                        <img className="w-fit h-[200px]" src={post.image} />
                    </div>
                    
                    <div className="mt-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.title}</div>
                    <div>
                        <p className='mt-2 block text-lg leading-tight font-medium text-black hover:underline'>{post.category}</p>
                    </div>
                </Link>
             ))}
            </div>
        </>
      
    )
}