import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBlogs } from '@/store/blog/blog.action'
import Link from 'next/link'
import Product from '@/components/shared/product'
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
                <Product product={post}></Product>
             ))}
            </div>
        </>
    )
}