import Button from "@/components/shared/button";
import { getOneBlogs } from "@/store/blog/blog.action";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails() {
    const router = useRouter();
    const { id } = router.query
    const dispatch = useDispatch();
    const blogData = useSelector(state => state.blogStore)
    const {loading, error, blog} = blogData 

    useEffect(() => {
        dispatch(getOneBlogs(id))
    }, [id])

    const handleChildClicked = () => {
        console.log('child clicked');
    }
    return(
        <>
            { blog 
                ? 
                <>
                    <div className="flex flex-col md:flex-row bg-white rounded-xl dark:bg-slate-800 border dark:border-slate-700 shadow">
                        <div className=" p-2 m-2 flex-none w-fit">
                            <img className="w-full md:w-[200px] lg:w-[300px]" src={blog.image} />
                        </div>
                        <div className="grow p-4 m-2">
                            <div className="block mt-1 text-sm leading-tight font-medium text-gray-400 hover:underline">
                                {blog.category}
                            </div>
                            <div className="mt-4 tracking-wide text-xl text-black dark:text-white font-semibold">{blog.title}</div>
                            <div class="flex justify-start mt-2">
                                <div className="mr-1">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div className="mr-1 text-gray-400">
                                    {blog.rating.rate} Ratings
                                </div>
                                <div className="mr-1 text-gray-400">|</div>
                                <div className='text-gray-400'>{blog.rating.count} Reviews</div>
                            </div>
                            <div class="text-gray-400 text-sm mt-4">
                                Description
                            </div>
                            <p className=" text-slate-500">
                                {blog.description}
                            </p>
                            
                            <div class="flex justify-between ...">
                                <div class="text-teal-500 font-bold text-lg mt-2">
                                $ {blog.price}
                                </div>
                                <div>
                                    <Button text={`Buy Now`} type="button" onClick={handleChildClicked}></Button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </>
                : <></>
            }
            <div ></div>
        </>
    )
}