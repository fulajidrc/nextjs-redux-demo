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
    return(
        <>
            { blog 
                ? 
                <>
                    <div className="flex ">
                        <div className="bg-white rounded-xl shadow p-2 m-2 flex-none w-fit">
                            <img className="w-[200px]" src={blog.image} />
                        </div>
                        <div className="grow p-4 bg-white rounded-xl shadow m-2">
                            <div className="mt-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{blog.title}</div>
                            <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                {blog.category}
                            </div>
                            <p className="mt-2 text-slate-500">
                                {blog.description}
                            </p>
                        </div>
                    </div>
                </>
                : <></>
            }
            <div ></div>
        </>
    )
}